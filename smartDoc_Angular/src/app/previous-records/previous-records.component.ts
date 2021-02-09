import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentServiceService } from '../appointment-service.service';
import { AuthServiceService } from '../auth-service.service';
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
  appointmentsDup:any;
  constructor(private router: Router,private service: AppointmentServiceService,private service1: PatientService,private service2: AuthServiceService) {
      
   }

  ngOnInit() {
    console.log("In ng 1st"+localStorage.getItem('showUserName'));
    this.service.getAppointmentsByUserName(localStorage.getItem('showUserName')).subscribe((result: any) => {
      console.log(result); this.appointmentsDup = result;
      for(var i=0;i<this.appointmentsDup.length;i++){
        this.appointmentsDup[i].date=new Date(this.appointmentsDup[i].date+86400000).toISOString().slice(0,10);
      }
      this.appointments=this.appointmentsDup;
     });
    this.service1.getPatientByUserName(localStorage.getItem('showUserName')).subscribe((result: any) => { console.log(result); this.patient = result; });
    localStorage.setItem('showUserName',null);
    console.log("ng 2nd"+localStorage.getItem('showUserName'));
  }
  logOut(): void{
    console.log("From SmartDoc");
    this.service2.setDoctorLoggedOut();
    this.router.navigate(['../hospital-login']);
  }
  viewReport(userName){
    localStorage.setItem('showUserName',userName);
    this.router.navigate(['view-report']);
    //this.refresh();
  }

}
