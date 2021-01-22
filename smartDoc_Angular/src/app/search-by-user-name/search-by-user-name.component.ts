import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentServiceService } from '../appointment-service.service';
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
  x:any;
  constructor(private router: Router,private service: AppointmentServiceService,private service1: PatientService) { 
    this.x = 0;
    //this.userName='';
  }

  ngOnInit() {
  }
  searchByUserName(){
    console.log(this.userName);
    this.service.getAppointmentsByUserName(this.userName).subscribe((result: any) => {
      console.log(result); this.appointments = result; });
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
