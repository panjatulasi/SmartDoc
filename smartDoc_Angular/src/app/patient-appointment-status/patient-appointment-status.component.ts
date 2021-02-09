import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentServiceService } from '../appointment-service.service';
import { AuthServiceService } from '../auth-service.service';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-appointment-status',
  templateUrl: './patient-appointment-status.component.html',
  styleUrls: ['./patient-appointment-status.component.css']
})
export class PatientAppointmentStatusComponent implements OnInit {
  appointments: any;
  appointmentsDup:any;

  constructor(private router: Router,private service: AppointmentServiceService,private service1: PatientService,private service2: AuthServiceService) { 
    this.service.getUpcomingPatientAppointments(localStorage.getItem('userName')).subscribe((result: any) => { console.log(result); this.appointmentsDup = result;
      for(var i=0;i<this.appointmentsDup.length;i++){
        this.appointmentsDup[i].date=new Date(this.appointmentsDup[i].date+86400000).toISOString().slice(0,10);
      }
      this.appointments=this.appointmentsDup;
     });
  }

  ngOnInit() {
  }
  logOut(): void{
    console.log("From SmartDoc");
    this.service2.setPatientLoggedOut();
    this.router.navigate(['../hospital-login']);
  }
  deleteAppointment(appointment : any) {
    this.service.deleteAppointment(appointment).subscribe((result: any) => {
  const i = this.appointments.findIndex((element) => {return element.appointmentId === appointment.appointmentId;
      });
  this.appointments.splice(i , 1);
    });
  }

}
