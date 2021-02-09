import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentServiceService } from '../appointment-service.service';
import { AuthServiceService } from '../auth-service.service';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-search-by-user-name',
  templateUrl: './search-by-user-name.component.html',
  styleUrls: ['./search-by-user-name.component.css']
})
export class SearchByUserNameComponent implements OnInit {
  appointments:any;
  patient:any;
  userName:any;
  appointmentsDup:any;
  x:any;
  constructor(private router: Router,private service: AppointmentServiceService,private service1: PatientService,private service2: AuthServiceService) { 
    this.x = 0;
    //this.userName='';
  }

  ngOnInit() {
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
  searchByUserName(){
    console.log(this.userName);
    this.service.getAppointmentsByUserName(this.userName).subscribe((result: any) => {
      console.log(result); this.appointmentsDup = result;
      for(var i=0;i<this.appointmentsDup.length;i++){
        this.appointmentsDup[i].date=new Date(this.appointmentsDup[i].date+86400000).toISOString().slice(0,10);
      }
      this.appointments=this.appointmentsDup;
     });
    this.service1.getPatientByUserName(this.userName).subscribe((result: any) => { console.log(result); this.patient = result; });
    console.log(this.patient);
    console.log(Object.keys(this.patient));
    this.x = 1;
    if(Object.keys(this.patient).length !== 0){
      this.router.navigate(['search-by-user-name']);
    
    //this.refresh();
    }
    // else if(this.patient === null){
    //   alert("UserName Not Found :(");
    // }
    else {
      alert("UserName Not Found :(");
    }
    
  }
  refresh(){
    window.location.reload();
}

}
