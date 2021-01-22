import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-login',
  templateUrl: './hospital-login.component.html',
  styleUrls: ['./hospital-login.component.css']
})
export class HospitalLoginComponent implements OnInit {

  user: any;
  constructor(private router: Router) {
    this.user = {loginId: '', password: ''};
  }

  ngOnInit() {
  }
  loginSubmit(loginForm: any): void {
    console.log(loginForm.loginId,loginForm.password)
    if (loginForm.loginId === 'admin' && loginForm.password === 'admin') {
      console.log("HIIIIIIIii")
      this.router.navigate(['doctor-login']);
    } else {
      alert('Invalid Credentials..');
    }
    console.log(loginForm);
  }

}
