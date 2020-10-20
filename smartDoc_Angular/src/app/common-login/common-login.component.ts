import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-login',
  templateUrl: './common-login.component.html',
  styleUrls: ['./common-login.component.css']
})
export class CommonLoginComponent implements OnInit {
  userName : any;

  constructor() { }
  

  ngOnInit() {
    this.userName=localStorage.getItem("userName");
  }
  

}
