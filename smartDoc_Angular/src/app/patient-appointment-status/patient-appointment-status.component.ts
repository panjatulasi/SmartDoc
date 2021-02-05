import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentServiceService } from '../appointment-service.service';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-appointment-status',
  templateUrl: './patient-appointment-status.component.html',
  styleUrls: ['./patient-appointment-status.component.css']
})
export class PatientAppointmentStatusComponent implements OnInit {
  appointments: any;
  appointmentsDup:any;

  constructor(private router: Router,private service: AppointmentServiceService,private service1: PatientService) { 
    this.service.getUpcomingPatientAppointments(localStorage.getItem('userName')).subscribe((result: any) => { console.log(result); this.appointmentsDup = result;
      for(var i=0;i<this.appointmentsDup.length;i++){
        this.appointmentsDup[i].date=new Date(this.appointmentsDup[i].date).toISOString().slice(0,10);
      }
      this.appointments=this.appointmentsDup;
     });
  }

  ngOnInit() {
  }
  deleteAppointment(appointment : any) {
    this.service.deleteAppointment(appointment).subscribe((result: any) => {
  const i = this.appointments.findIndex((element) => {return element.appointmentId === appointment.appointmentId;
      });
  this.appointments.splice(i , 1);
    });
  }

}
