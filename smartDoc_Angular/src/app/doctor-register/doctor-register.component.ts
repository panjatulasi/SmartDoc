import { Component, OnInit } from '@angular/core';
import { DoctorService } from './../doctor.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent implements OnInit {

  doctor: any;
  department: any;
  encryptedData : string = "";
secretkey:string = "yoursecretkey";
dataToEncrypt : any;
  constructor(private router: Router,private service: DoctorService) {
    this.doctor = {doctorId: '', doctorName: '', userName:'', mobileNumber: '', password: '' ,department:''
    //department: {departmentId:'',department: ''}
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
    this.dataToEncrypt = {password:this.doctor.password};
    this.Encrypt();
    this.doctor.password=this.encryptedData;
    this.service.registerDoctor(this.doctor).subscribe((result: any) => { 
      if(result === 0)
      alert("registration failed :( ");
      else{
        localStorage.setItem('userName',this.doctor.userName);
      this.router.navigate(['doctor-appointment']);} } );
    console.log(this.doctor);
  }

}
