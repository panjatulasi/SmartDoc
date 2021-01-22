import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentServiceService } from '../appointment-service.service';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent implements OnInit {
  appointments:any;
  editObject:any;
  patient: any;
  userName: any;
  constructor(private router: Router,private service: AppointmentServiceService,private service1: PatientService) { 
    //this.editObject={appointmentId:'',patientUserName:'',department:'',date:'',time:'',reason:'',accept:''};
  }

  ngOnInit() {
    this.service.getAllAppointments(localStorage.getItem('department')).subscribe((result: any) => { console.log(result); this.appointments = result; });
  }
  searchByUserName(){
    console.log(this.userName);
    this.service.getAppointmentsByUserName(this.userName).subscribe((result: any) => {
      console.log(result); this.appointments = result; });
    this.service1.getPatientByUserName(this.userName).subscribe((result: any) => { console.log(result); this.patient = result; });
    if(this.patient === null){
    alert("UserName Not Found :(");
    this.refresh();
    }
    else {
    this.router.navigate(['search-by-user-name']);
    }
    
  }
  deleteAppointment(appointment : any) {
    this.service.deleteAppointment(appointment).subscribe((result: any) => {
  const i = this.appointments.findIndex((element) => {return element.appointmentId === appointment.appointmentId;
      });
  this.appointments.splice(i , 1);
    });
  }
  updateAppointment(appointment:any) {
    this.editObject=appointment;
    this.editObject.accept='Yes';
    this.service.updateAppointment(this.editObject).subscribe();
    this.refresh();
    //this.router.navigate(['doctor-appointment']); 
    console.log(this.editObject);
  }
  refresh(){
    window.location.reload();
}


}
