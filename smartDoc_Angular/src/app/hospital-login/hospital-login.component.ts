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
    if (loginForm.loginId === 'admin' && loginForm.password === 'admin') {
      this.router.navigate(['hospital-related']);
    } else {
      alert('Invalid Credentials..');
    }
    console.log(loginForm);
  }

}
