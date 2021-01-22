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
  constructor(private router: Router,private service: AppointmentServiceService,private service1: PatientService) { }

  ngOnInit() {
    this.service.getUpcomingAppointments(localStorage.getItem('department')).subscribe((result: any) => { console.log(result); this.appointments = result; });
    localStorage.setItem('showUserName',null);
  }
  showRecords(userName){
    localStorage.setItem('showUserName',userName);
    this.router.navigate(['previous-records']);
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
