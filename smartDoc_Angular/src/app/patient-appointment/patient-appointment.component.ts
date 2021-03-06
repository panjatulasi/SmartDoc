import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentServiceService } from '../appointment-service.service';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent implements OnInit {
  appointment:any;
  doctors:any;
  date:any;
  today:any;

  constructor(private router: Router,private service: AppointmentServiceService,private service1: AuthServiceService) {
    this.today=new Date().toISOString().slice(0,10);
    this.appointment={appointmentId:'',patientUserName:'',department:'',date:'',time:'',reason:'',accept:''};
    console.log("Inside constructor"+this.today);
   }

  ngOnInit() {
    
    this.service.getAllDepartments().subscribe((result: any) => { console.log(result); this.doctors = result; });
    console.log("Inside Init"+this.today);
  }
  model;
  select(d){
    this.date=d;
    console.log("Date"+d);
  }
  logOut(): void{
    console.log("From SmartDoc");
    this.service1.setPatientLoggedOut();
    this.router.navigate(['../hospital-login']);
  }
  register(): void {
    this.appointment.patientUserName=localStorage.getItem('userName');
    this.appointment.date=this.date;
    if(this.appointment.date !='' && this.appointment.time !='' && this.appointment.reason != '' && this.appointment.department !=''){
    //this.appointment.phoneNumber=localStorage.getItem('mobileNumber');
    this.service.registerAppointment(this.appointment).subscribe((result: any) => { 
      //console.log(result);
      if(result === 0){
      alert("Request failed :( ");
      console.log("TS");
      }
      else{
        alert("Request sent Successfully :-) ");
        this.refresh();
      //this.router.navigate(['patient-appointment']); 
    }} );
  }
  else {
    alert("Please enter all the fields")
  }
    
    console.log(this.appointment.date+"Inside VS");
  }
  refresh(){
    window.location.reload();
}

}
