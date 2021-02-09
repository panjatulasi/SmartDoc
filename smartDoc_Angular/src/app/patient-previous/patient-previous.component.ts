import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentServiceService } from '../appointment-service.service';
import { AuthServiceService } from '../auth-service.service';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-previous',
  templateUrl: './patient-previous.component.html',
  styleUrls: ['./patient-previous.component.css']
})
export class PatientPreviousComponent implements OnInit {
  appointments:any;
  appointmentsDup:any;
  userName:any;
  appt:any;

  constructor(private router: Router,private service: AppointmentServiceService,private service1: PatientService,private service2: AuthServiceService) { 
    this.searchByUserName();
  }

  ngOnInit() {
  }
  logOut(): void{
    console.log("From SmartDoc");
    this.service2.setPatientLoggedOut();
    this.router.navigate(['../hospital-login']);
  }
  searchByUserName(){
   // console.log(this.userName);
    this.service.getAppointmentsByUserName(localStorage.getItem('userName')).subscribe((result: any) => {
      console.log(result); this.appointmentsDup = result;
      for(var i=0;i<this.appointmentsDup.length;i++){
        console.log(this.appointmentsDup[i].date);
        this.appointmentsDup[i].date=new Date(this.appointmentsDup[i].date+86400000).toISOString().slice(0,10);
      }
      this.appointments=this.appointmentsDup;
     });
    
    //this.refresh();
    }
    // else if(this.patient === null){
    //   alert("UserName Not Found :(");
    // }
    
    viewReport(){
      this.router.navigate(['patient-report']);
    }
    
    }
