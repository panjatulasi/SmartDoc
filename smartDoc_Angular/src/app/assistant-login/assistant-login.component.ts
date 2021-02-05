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
  obj: any;
  patt: any;
  result1: any;
  encryptedData: string = "";
  secretkey: string = "yoursecretkey";
  constructor(private router: Router, private assistantService: AssistantService) {
    this.user = { userName: '', password: '' };
  }
  Decrypt() {
    let bytes = CryptoJS.AES.decrypt(this.encryptedData, this.secretkey);
    this.obj = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
  ngOnInit() {
  }
  myFunction(str: any) {

  }

  loginSubmit(loginForm: any): void {
    this.patt = "@gmail.com";
    this.result1 = loginForm.userName.match(this.patt);
    console.log(loginForm.password);
    console.log(this.result1)
    if (this.result1 && loginForm.password !='') {
      this.assistantService.getAssistant(loginForm.userName, loginForm.password).subscribe((result: any) => {
        console.log(result);
        if (result === null) {
          alert('Invalid Credentials');
        }
        else {
          this.encryptedData = result.password;
          this.Decrypt();
          if (this.obj.password === loginForm.password) {
            localStorage.setItem('userName', loginForm.userName);

            this.router.navigate(['assistant-profile-edit']);
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
