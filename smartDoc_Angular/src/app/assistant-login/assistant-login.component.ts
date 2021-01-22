import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssistantService } from './../assistant.service';
import * as CryptoJS from 'crypto-js';
import { stringify } from '@angular/compiler/src/util';
import { verifyHostBindings } from '@angular/compiler';

@Component({
  selector: 'app-assistant-login',
  templateUrl: './assistant-login.component.html',
  styleUrls: ['./assistant-login.component.css']
})
export class AssistantLoginComponent implements OnInit {

  user: any;
  obj:any;
encryptedData : string = "";
secretkey:string = "yoursecretkey";
  constructor(private router: Router, private assistantService: AssistantService) {
    this.user = {userName: '', password: ''};
  }
  Decrypt() {
    let bytes = CryptoJS.AES.decrypt(this.encryptedData, this.secretkey);
     this.obj = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
  ngOnInit() {
  }
  loginSubmit(loginForm: any): void {
    this.assistantService.getAssistant(loginForm.userName,loginForm.password).subscribe((result: any) => {
      console.log(result);
      if(result === null){
        alert('Invalid Credentials');
      }
      else {
        this.encryptedData=result.password;
        this.Decrypt();
        if(this.obj.password === loginForm.password){
        localStorage.setItem('userName',loginForm.userName);

        this.router.navigate(['assistant-profile-edit']);
        }
        else {
          alert('Invalid Credentials');
        }
      }
    })
  }
  

}
