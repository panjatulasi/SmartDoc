import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from './../doctor.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

  user: any;
  constructor(private router: Router, private doctorService: DoctorService) {
    this.user = {userName: '', password: ''};
  }

  ngOnInit(): void {
  }
  loginSubmit(loginForm: any): void {
    this.doctorService.getDoctor(loginForm.userName,loginForm.password).subscribe((result: any) => {
      console.log(result);
      if(result === null){
        alert('Invalid Credentials');
      }
      else {
        localStorage.setItem('userName',loginForm.userName);
        this.router.navigate(['doctor-profile-edit']);
      }
    })
  }

}
