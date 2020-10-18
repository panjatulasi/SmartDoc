import { Component, OnInit } from '@angular/core';
import { AssistantService } from './../assistant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assistant-register',
  templateUrl: './assistant-register.component.html',
  styleUrls: ['./assistant-register.component.css']
})
export class AssistantRegisterComponent implements OnInit {
  doctor: any;
  assistant: any;
  constructor(private router: Router,private service: AssistantService) {
    this.assistant = {assistantId: '', assistantName: '', userName:'', mobileNumber: '', password: '', doctorUserName: ''
    //doctor: {doctorUserName: ''}
  };
  }

  ngOnInit(): void {
  }
  register(): void {
    this.service.registerAssistant(this.assistant).subscribe((result: any) => { this.router.navigate(['assistant-login']); } );
    console.log(this.assistant);
  }

}
