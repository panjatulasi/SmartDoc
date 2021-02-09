import { Component, OnInit } from '@angular/core';
import { DoctorService } from './../doctor.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import * as Snackbar from 'node-snackbar';
import { AuthServiceService } from '../auth-service.service';


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
  patt: string;
  confirmPassword: any;
  result1:any;
  constructor(private router: Router,private service: DoctorService,private service1: AuthServiceService) {
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
  logOut(): void{
    console.log("From SmartDoc");
    this.service1.setHospitalLoggedOut();
    this.router.navigate(['../hospital-login']);
  }
  register(): void {
    this.patt = "@gmail.com";
    this.result1 = this.doctor.userName.match(this.patt);
    console.log(this.doctor.password);
    console.log(this.result1)
    if(!this.result1){
      alert('Please enter a valid gmail address');
    }
    else if(this.doctor.password == '' || this.doctor.doctorName=='' || this.doctor.mobileNumber =='' || this.doctor.department =='')
    alert("Please enter all the fields")
    else if(this.doctor.password != this.confirmPassword)
    alert('Password and confirm password must be same !!!')
    else if (this.result1 && this.doctor.password !='' &&this.doctor.doctorName!='' && this.doctor.mobileNumber !='' && this.doctor.department !='') {
    this.dataToEncrypt = {password:this.doctor.password};
    this.Encrypt();
    this.doctor.password=this.encryptedData;
    this.doctor.doctorName=this.doctor.doctorName[0].toUpperCase() + this.doctor.doctorName.slice(1);
    this.doctor.department=this.doctor.department[0].toUpperCase() + this.doctor.department.slice(1);
    
    this.service.registerDoctor(this.doctor).subscribe((result: any) => { 
      if(result === 0)
      alert("registration failed :( ");
      else{
        localStorage.setItem('userName',this.doctor.userName);
        localStorage.setItem('department',this.doctor.department);
      localStorage.setItem('name',this.doctor.doctorName);
      this.service1.setDoctorLoggedIn();
      this.router.navigate(['doctor-appointment']);
      
    } } );
       
    console.log(this.doctor);
  }
}

}  

