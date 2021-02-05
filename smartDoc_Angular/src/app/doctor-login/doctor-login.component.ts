import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from './../doctor.service';
import * as CryptoJS from 'crypto-js';
import { stringify } from '@angular/compiler/src/util';
import { verifyHostBindings } from '@angular/compiler';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

  user: any;
  obj:any;
encryptedData : string = "";
secretkey:string = "yoursecretkey";
  patt: string;
  result1: any;
  constructor(private router: Router, private doctorService: DoctorService) {
    this.user = {userName: '', password: ''};
  }
  Decrypt() {
    let bytes = CryptoJS.AES.decrypt(this.encryptedData, this.secretkey);
     this.obj = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
  ngOnInit(): void {
  }
  loginSubmit(loginForm: any): void {
    this.patt = "@gmail.com";
    this.result1 = loginForm.userName.match(this.patt);
    console.log(loginForm.password);
    console.log(this.result1)
    if (this.result1 && loginForm.password !='') {
    this.doctorService.getDoctor(loginForm.userName,loginForm.password).subscribe((result: any) => {
      console.log(result);
      if(result === null){
        alert('Invalid Credentials');
      }
      else {
        this.encryptedData=result.password;
        this.Decrypt();
        if(this.obj.password === loginForm.password){
        localStorage.setItem('userName',loginForm.userName);
        localStorage.setItem('department',result.department);
        localStorage.setItem('name',result.doctorName);

        this.router.navigate(['doctor-appointment']);
        }
        else {
          alert('Invalid Credentials');
        }
      }
    })
  }
  else if(loginForm.password == '')
alert("Please enter the required(*) fields")
else
  alert("Please enter a valid gmail address");
}

}
