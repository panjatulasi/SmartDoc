import { Component, OnInit } from '@angular/core';
import { AssistantService } from './../assistant.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-assistant-register',
  templateUrl: './assistant-register.component.html',
  styleUrls: ['./assistant-register.component.css']
})
export class AssistantRegisterComponent implements OnInit {
  doctor: any;
  assistant: any;
  encryptedData : string = "";
secretkey:string = "yoursecretkey";
dataToEncrypt : any;
  patt: string;
  result1: any;
  confirmPassword:any;
  crtName:any;
  constructor(private router: Router,private service: AssistantService,private service1: AuthServiceService) {
    this.assistant = {assistantId: '', assistantName: '', userName:'', mobileNumber: '', password: ''};
    //doctor: {doctorUserName: ''}
  
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
    this.result1 = this.assistant.userName.match(this.patt);
    console.log(this.assistant.password);
    console.log(this.result1)
    if(!this.result1){
      alert("Please enter a valid gmail address");
    }
    else if(this.assistant.password == '' || this.assistant.assistantName=='' || this.assistant.mobileNumber =='')
alert("Please enter all the fields")
    else if(this.assistant.password != this.confirmPassword)
    alert('Password and confirm password must be same !!!')
    else if (this.result1 && this.assistant.password !='' &&this.assistant.assistantName!='' && this.assistant.mobileNumber !='') {
      this.dataToEncrypt = {password:this.assistant.password};
    this.Encrypt();
    this.assistant.password=this.encryptedData;
    this.assistant.assistantName=this.assistant.assistantName[0].toUpperCase() + this.assistant.assistantName.slice(1);
    console.log(this.assistant.assistantName);
    this.service.registerAssistant(this.assistant).subscribe((result: any) => { 
      if(result === 0)
      alert("registration failed :( ");
      else{
        localStorage.setItem('userName',this.assistant.userName);
        this.service1.setAssistantLoggedIn();
      this.router.navigate(['upload-report']);} } );
    console.log(this.assistant);
  }
}

}
