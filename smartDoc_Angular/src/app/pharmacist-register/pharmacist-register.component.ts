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

}
