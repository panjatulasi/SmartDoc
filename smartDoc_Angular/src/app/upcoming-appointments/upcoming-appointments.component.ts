import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentServiceService } from '../appointment-service.service';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-upcoming-appointments',
  templateUrl: './upcoming-appointments.component.html',
  styleUrls: ['./upcoming-appointments.component.css']
})
export class UpcomingAppointmentsComponent implements OnInit {
  appointments:any;
  editObject:any;
  patient:any;
  userName:String;
  subject:any;
  body:any;
  appointmentsDup:any;
  constructor(private router: Router,private service: AppointmentServiceService,private service1: PatientService) { }

  ngOnInit() {
    this.service.getUpcomingAppointments(localStorage.getItem('department')).subscribe((result: any) => { console.log(result); this.appointmentsDup = result;
      for(var i=0;i<this.appointmentsDup.length;i++){
        this.appointmentsDup[i].date=new Date(this.appointmentsDup[i].date).toISOString().slice(0,10);
      }
      this.appointments=this.appointmentsDup;
     });
    localStorage.setItem('showUserName',null);
  }
  showRecords(userName){
    localStorage.setItem('showUserName',userName);
    this.router.navigate(['previous-records']);
    //this.refresh();
  }
  viewReport(userName){
    localStorage.setItem('showUserName',userName);
    this.router.navigate(['view-report']);
    //this.refresh();
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
    //this.refresh();
  }
  updateAppointment(appointment:any) {
    this.subject="SMARTDOC: About Tablets";
    this.body="Hello,$Your Appointment booked for "+appointment.date+" in the "+appointment.time+" with Dr."+localStorage.getItem('name')+" - The "+localStorage.getItem('department')+" was completed successfully.$Please take the below medicines : $"+appointment.prescription+"$Thank you for choosing our Hospital. ";
    console.log(this.body);
    this.service1.sendMail(appointment.patientUserName,this.subject,this.body).subscribe((result:any)=>{
      console.log("Hii from mail");
    })
    this.editObject=appointment;
    this.editObject.status='Yes';
    this.service.updateAppointment(this.editObject).subscribe();
    this.refresh();
    //this.router.navigate(['doctor-appointment']); 
    console.log(this.editObject);
  }
  refresh(){
    window.location.reload();
}

}
