import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-hospital-login',
  templateUrl: './hospital-login.component.html',
  styleUrls: ['./hospital-login.component.css']
})
export class HospitalLoginComponent implements OnInit {

  user: any;
  constructor(private router: Router,private service: AuthServiceService) {
    this.user = {loginId: '', password: ''};
  }

  ngOnInit() {
  }
  logOut(): void{
    console.log("From SmartDoc");
    this.service.setHospitalLoggedOut();
    this.router.navigate(['../hospital-login']);
  }
  loginSubmit(loginForm: any): void {
    console.log(loginForm.loginId,loginForm.password)
    
    if (loginForm.loginId === 'admin' && loginForm.password === 'admin') {
      console.log("HIIIIIIIii")
      this.service.setHospitalLoggedIn();
      this.router.navigate(['doctor-login']);
    } else {
      alert('Invalid Credentials..');
    }
    console.log(loginForm);
  }

}
