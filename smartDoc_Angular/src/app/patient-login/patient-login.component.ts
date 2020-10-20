import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from './../patient.service';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {

  user: any;
  constructor(private router: Router, private patientService: PatientService) {
    this.user = {userName: '', password: ''};
    
  }

  ngOnInit(): void {
  }
  loginSubmit(loginForm: any): void {
    console.log(loginForm.userName+" "+loginForm.password);
    this.patientService.getPatient(loginForm.userName,loginForm.password).subscribe((result: any) => {
      console.log(result);
      if(result === null){
        alert('Invalid Credentials');
      }
      else {
        localStorage.setItem('userName',loginForm.userName);
        this.router.navigate(['common-login']);
      }
    })

  }
}
