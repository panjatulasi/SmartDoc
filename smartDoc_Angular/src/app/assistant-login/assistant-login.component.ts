import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssistantService } from './../assistant.service'

@Component({
  selector: 'app-assistant-login',
  templateUrl: './assistant-login.component.html',
  styleUrls: ['./assistant-login.component.css']
})
export class AssistantLoginComponent implements OnInit {

  user: any;
  constructor(private router: Router, private assistantService: AssistantService) {
    this.user = {userName: '', password: ''};
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
        localStorage.setItem('userName',loginForm.userName);
        this.router.navigate(['assistant-profile-edit']);
      }
    })
  }
  

}
