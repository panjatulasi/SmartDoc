import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentServiceService } from '../appointment-service.service';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-previous-records',
  templateUrl: './previous-records.component.html',
  styleUrls: ['./previous-records.component.css']
})
export class PreviousRecordsComponent implements OnInit {
  appointments:any;
  patient:any;
  userName:String;
  constructor(private router: Router,private service: AppointmentServiceService,private service1: PatientService) {
      
   }

  ngOnInit() {
    this.service.getAppointmentsByUserName(localStorage.getItem('showUserName')).subscribe((result: any) => {
      console.log(result); this.appointments = result; });
    this.service1.getPatientByUserName(localStorage.getItem('showUserName')).subscribe((result: any) => { console.log(result); this.patient = result; });
    //localStorage.setItem('showUserName',null);
  }

}
