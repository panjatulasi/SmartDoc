import { Component, OnInit } from '@angular/core';
import { AssistantService } from './../assistant.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';


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
  constructor(private router: Router,private service: AssistantService) {
    this.assistant = {assistantId: '', assistantName: '', userName:'', mobileNumber: '', password: '', doctorUserName: ''
    //doctor: {doctorUserName: ''}
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
    this.dataToEncrypt = {password:this.assistant.password};
    this.Encrypt();
    this.assistant.password=this.encryptedData;
    this.service.registerAssistant(this.assistant).subscribe((result: any) => { 
      if(result === 0)
      alert("registration failed :( ");
      else{
        localStorage.setItem('userName',this.assistant.userName);
      this.router.navigate(['assistant-profile-edit']);} } );
    console.log(this.assistant);
  }

}
