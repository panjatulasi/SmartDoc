import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PharmacistService } from './../pharmacist.service';

@Component({
  selector: 'app-pharmacist-login',
  templateUrl: './pharmacist-login.component.html',
  styleUrls: ['./pharmacist-login.component.css']
})
export class PharmacistLoginComponent implements OnInit {

  user: any;
  constructor(private router: Router, private pharmacistService: PharmacistService) {
    this.user = {userName: '', password: ''};
  }

  ngOnInit(): void {
  }
  loginSubmit(loginForm: any): void {
    this.pharmacistService.getPharmacist(loginForm.userName,loginForm.password).subscribe((result: any) => {
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
