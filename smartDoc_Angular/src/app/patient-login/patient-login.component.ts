import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from './../patient.service';
import { ViewChild,ElementRef } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { stringify } from '@angular/compiler/src/util';
import { verifyHostBindings } from '@angular/compiler';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {
  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;
  auth2:any;
  user: any;
  dataToEncrypt : any;
  patient : any;
  private zone:any;
  obj:any;
encryptedData : string = "";
secretkey:string = "yoursecretkey";
  patt: string;
  result1: any;
constructor(private router: Router, private patientService: PatientService) {
  this.user = {userName: '', password: ''};
  //this.patient = {patientId: '', patientName: '', userName:'', mobileNumber: '',age:'',gender:'', password: ''};
  
}
Encrypt(){
  this.encryptedData=CryptoJS.AES.encrypt(JSON.stringify(this.dataToEncrypt),this.secretkey).toString();
  console.log("HIIII");
}
Decrypt() {
	let bytes = CryptoJS.AES.decrypt(this.encryptedData, this.secretkey);
   this.obj = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

  ngOnInit(): void {
    // this.googleInitialize();
  }
  googleInitialize() {
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '968949306970-h7r96vnngtt1htdigvnqa9viibl4cddh.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLogin();
      });
    }
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }
  prepareLogin() {
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        this.patient = {patientId: '', patientName: '', userName:'', mobileNumber: '',age:'',gender:'', password: ''};
        this.patient.patientName=profile.getName();
        this.patient.userName=profile.getEmail();
        console.log("INSIDE VERIFYEMAIL")
    localStorage.setItem('userName',this.patient.userName);
    alert("localStorage UserName:"+localStorage.getItem("userName"));
    this.patientService.registerPatientByGoogle(this.patient).subscribe((result: any) => 
                    { this.router.navigate(['patient-profile-edit']); } );
        
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  loginSubmit(loginForm: any): void {
    this.patt = "@gmail.com";
    this.result1 = loginForm.userName.match(this.patt);
    console.log(loginForm.password);
    console.log(this.result1)
    if (this.result1 && loginForm.password !='') {
    this.patientService.getPatientByUserName(loginForm.userName).subscribe((result: any) => { 
    // this.patientService.getPatient(loginForm.userName,loginForm.password).subscribe((result: any) => {
      //console.log(result);
      if(result === null){
        alert('Invalid Credentials');
      }
      else {
        this.encryptedData=result.password;
        this.Decrypt();
        if(this.obj.password === loginForm.password){
        localStorage.setItem('userName',loginForm.userName);
        localStorage.setItem('mobileNumber',result.mobileNumber);

        this.router.navigate(['patient-appointment']);
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
  
  
