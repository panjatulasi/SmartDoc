import { Component, OnInit } from '@angular/core';
import { PatientService } from './../patient.service'
import { Router } from '@angular/router';
import { ViewChild,ElementRef } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {
  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;
  auth2:any;
  dataToEncrypt : any;
  result1:any;
  patient: any;
encryptedData : string = "";
secretkey:string = "yoursecretkey";
  patt: string;
  confirmPassword: any;
  
  constructor(private router: Router,private service: PatientService,private service1: AuthServiceService) {
    this.patient = {patientId: '', patientName: '', userName:'', mobileNumber: '',age:'',gender:'', password: '' 
  };
}

  ngOnInit(): void {
    // this.googleInitialize();
  }
  Encrypt(){
    this.encryptedData=CryptoJS.AES.encrypt(JSON.stringify(this.dataToEncrypt),this.secretkey).toString();
    console.log("HIIII");
    //alert(this.encryptedData);
  }
  logOut(): void{
    console.log("From SmartDoc");
    this.service1.setPatientLoggedOut();
    this.router.navigate(['../hospital-login']);
  }
  // googleInitialize() {
  //   window['googleSDKLoaded'] = () => {
  //     window['gapi'].load('auth2', () => {
  //       this.auth2 = window['gapi'].auth2.init({
  //         client_id: '968949306970-h7r96vnngtt1htdigvnqa9viibl4cddh.apps.googleusercontent.com',
  //         cookie_policy: 'single_host_origin',
  //         scope: 'profile email'
  //       });
  //       this.prepareLogin();
  //     });
  //   }
  //   (function(d, s, id){
  //     var js, fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) {return;}
  //     js = d.createElement(s); js.id = id;
  //     js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
  //     fjs.parentNode.insertBefore(js, fjs);
  //   }(document, 'script', 'google-jssdk'));
  // }
  // prepareLogin() {
  //   this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
  //     (googleUser) => {
  //       let profile = googleUser.getBasicProfile();
  //       console.log('Token || ' + googleUser.getAuthResponse().id_token);
  //       console.log('Image URL: ' + profile.getImageUrl());
  //       console.log('Email: ' + profile.getEmail());
  //       this.patient.userName =  profile.getName()
  //       this.router.navigate(['patient-profile-edit']);
  //     }, (error) => {
  //       alert(JSON.stringify(error, undefined, 2));
  //     });
  // }
  register(): void {
    this.patt = "@gmail.com";
    this.result1 = this.patient.userName.match(this.patt);
    console.log(this.patient.password);
    console.log(this.result1)
    if(!this.result1)
    alert("Please enter a valid gmail address");
    else if(this.patient.password == '' || this.patient.patientName=='' || this.patient.mobileNumber =='' || this.patient.gender =='' || this.patient.age=='')
alert("Please enter all the fields")
    else if(this.patient.password != this.confirmPassword)
    alert('Password and confirm password must be same !!!')
    else if (this.result1 && this.patient.password !='' &&this.patient.doctorName!='' && this.patient.mobileNumber !='' && this.patient.gender !='' && this.patient.age !='' ) {
    this.dataToEncrypt = {password:this.patient.password};
    this.Encrypt();
    this.patient.password=this.encryptedData;
    this.patient.patientName=this.patient.patientName[0].toUpperCase() + this.patient.patientName.slice(1);
    this.service.registerPatient(this.patient).subscribe((result: any) => { 
      console.log(result);
      if(result === 0)
      alert("registration failed :( ");
      else{
        localStorage.setItem('userName',this.patient.userName);
        localStorage.setItem('mobileNumber',this.patient.mobileNumber);
        this.service1.setPatientLoggedIn();
      this.router.navigate(['patient-appointment']);}} );
    
    console.log(this.patient);
  }
}

}
