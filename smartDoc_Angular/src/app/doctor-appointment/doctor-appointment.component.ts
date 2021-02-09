import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentServiceService } from '../appointment-service.service';
import { AuthServiceService } from '../auth-service.service';
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
  body:any;
  subject:any;
  d:any;
  appointmentsDup:any;
  constructor(private router: Router,private service: AppointmentServiceService,private service1: PatientService,private service2: AuthServiceService) { 
    //this.editObject={appointmentId:'',patientUserName:'',department:'',date:'',time:'',reason:'',accept:''};
  }

  ngOnInit() {
    this.service.getAllAppointments(localStorage.getItem('department')).subscribe((result: any) => { console.log(result); this.appointmentsDup = result;

      for(var i=0;i<this.appointmentsDup.length;i++){
        this.appointmentsDup[i].date=new Date(this.appointmentsDup[i].date+86400000).toISOString().slice(0,10);
      }
      this.appointments=this.appointmentsDup;

    });
    

  }
  logOut(): void{
    console.log("From SmartDoc");
    this.service2.setHospitalLoggedOut();
    this.service2.setDoctorLoggedOut();
    this.router.navigate(['../hospital-login']);
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
    this.subject="SMARTDOC: Regarding Cancellation Of Appointment";
    this.body="Hello,$Your appointment booked for "+appointment.date+" in the "+appointment.time+" with Dr."+localStorage.getItem('name')+" - The "+localStorage.getItem('department')+" had canceled since the doctor is busy with their Appointments. Please book your Appointment again.$Sorry for the inconvenience.";
    this.service1.sendMail(appointment.patientUserName,this.subject,this.body).subscribe((result:any)=>{
      console.log("Hii from mail");
    })
    this.service.deleteAppointment(appointment).subscribe((result: any) => {
  const i = this.appointments.findIndex((element) => {return element.appointmentId === appointment.appointmentId;
      });
  this.appointments.splice(i , 1);
    });
  }
  updateAppointment(appointment:any) {
    this.subject="SMARTDOC: Regarding Approval Of Appointment";
    this.body="Hello,$Your appointment booked for "+appointment.date+" in the "+appointment.time+" with Dr."+localStorage.getItem('name')+" - The "+localStorage.getItem('department')+" was approved.$Thank you for choosing our Hospital. "
    this.service1.sendMail(appointment.patientUserName,this.subject,this.body).subscribe((result:any)=>{
      console.log("Hii from mail");
    })
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
