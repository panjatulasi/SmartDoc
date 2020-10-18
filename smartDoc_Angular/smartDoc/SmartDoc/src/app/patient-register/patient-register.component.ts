import { Component, OnInit } from '@angular/core';
import { PatientService } from './../patient.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {

  patient: any;
  
  constructor(private router: Router,private service: PatientService) {
    this.patient = {patientId: '', patientName: '', userName:'', mobileNumber: '',age:'',gender:'', password: '' 
  };
}

  ngOnInit(): void {
  }
  register(): void {
    this.service.registerPatient(this.patient).subscribe((result: any) => { this.router.navigate(['patient-login']); } );
    
    console.log(this.patient);
  }

}
