import { Component, OnInit } from '@angular/core';
import { PharmacistService } from './../pharmacist.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-pharmacist-register',
  templateUrl: './pharmacist-register.component.html',
  styleUrls: ['./pharmacist-register.component.css']
})
export class PharmacistRegisterComponent implements OnInit {

  pharmacist: any;
  department: any;
  encryptedData : string = "";
secretkey:string = "yoursecretkey";
dataToEncrypt : any;
  patt: string;
  result1: any;
  confirmPassword: any;
  constructor(private router: Router,private service: PharmacistService) {
    this.pharmacist = {pharmacistId: '', pharmacistName: '', userName:'', mobileNumber: '', password: '' 
  };
}
Encrypt(){
  this.encryptedData=CryptoJS.AES.encrypt(JSON.stringify(this.dataToEncrypt),this.secretkey).toString();
  console.log("HIIII");
  //alert(this.encryptedData);
}

  ngOnInit(): void {
  }
  register(): void {
    this.patt = "@gmail.com";
    this.result1 = this.pharmacist.userName.match(this.patt);
    console.log(this.pharmacist.password);
    console.log(this.result1)
    if(this.pharmacist.password != this.confirmPassword)
    alert('Password and confirm password must be same !!!')
    else if (this.result1 && this.pharmacist.password !='' &&this.pharmacist.pharmacistName!='' && this.pharmacist.mobileNumber !='' && this.pharmacist.department !='') {
    this.dataToEncrypt = {password:this.pharmacist.password};
    this.Encrypt();
    this.pharmacist.password=this.encryptedData;
    this.service.registerPharmacist(this.pharmacist).subscribe((result: any) => { 
      if(result === 0)
      alert("registration failed :( ");
      else{
        localStorage.setItem('userName',this.pharmacist.userName);
      this.router.navigate(['pharmacist-profile-edit']);}} );
    console.log(this.pharmacist);
  }
  else if(this.pharmacist.password == '' || this.pharmacist.doctorName=='' || this.pharmacist.mobileNumber =='' || this.pharmacist.department =='')
alert("Please enter all the fields")
else
  alert("Please enter a valid gmail address");
}

}
