import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PharmacistService } from './../pharmacist.service';
import * as CryptoJS from 'crypto-js';
import { stringify } from '@angular/compiler/src/util';
import { verifyHostBindings } from '@angular/compiler';

@Component({
  selector: 'app-pharmacist-login',
  templateUrl: './pharmacist-login.component.html',
  styleUrls: ['./pharmacist-login.component.css']
})
export class PharmacistLoginComponent implements OnInit {

  user: any;
  obj:any;
encryptedData : string = "";
secretkey:string = "yoursecretkey";
  constructor(private router: Router, private pharmacistService: PharmacistService) {
    this.user = {userName: '', password: ''};
  }
  Decrypt() {
    let bytes = CryptoJS.AES.decrypt(this.encryptedData, this.secretkey);
     this.obj = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }

  ngOnInit(): void {
  }
  loginSubmit(loginForm: any): void {
    this.pharmacistService.getPharmacist(loginForm.userName,loginForm.password).subscribe((result: any) => {
      console.log(result);
      if(result === null){
        alert('Invalid Credentials');
      }
      else {
        
        this.encryptedData=result.password;
        this.Decrypt();
        if(this.obj.password === loginForm.password){
        localStorage.setItem('userName',loginForm.userName);

        this.router.navigate(['pharmacist-profile-edit']);
        }
        else {
          alert('Invalid Credentials');
        }
      }
    })
  }

}
