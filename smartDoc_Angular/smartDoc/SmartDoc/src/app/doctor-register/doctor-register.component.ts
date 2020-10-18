import { Component, OnInit } from '@angular/core';
import { DoctorService } from './../doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent implements OnInit {

  doctor: any;
  department: any;
  constructor(private router: Router,private service: DoctorService) {
    this.doctor = {doctorId: '', doctorName: '', userName:'', mobileNumber: '', password: '' ,department:''
    //department: {departmentId:'',department: ''}
  };
}
  ngOnInit(): void {
  }
  register(): void {
    this.service.registerDoctor(this.doctor).subscribe((result: any) => { this.router.navigate(['doctor-login']); } );
    console.log(this.doctor);
  }

}
