import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentServiceService } from '../appointment-service.service';
import { AuthServiceService } from '../auth-service.service';
import { PatientService } from '../patient.service';
import {DoctorService} from './../doctor.service';
declare var jQuery: any;

@Component({
  selector: 'app-doctor-profile-edit',
  templateUrl: './doctor-profile-edit.component.html',
  styleUrls: ['./doctor-profile-edit.component.css']
})
export class DoctorProfileEditComponent implements OnInit {

  doctor: any;
  editObject: any;
  userName1: String;
  appointments:any;
  patient:any;
  userName:String;
  constructor(private service: DoctorService,private service1: PatientService,private router: Router,private service2: AppointmentServiceService,private service3: AuthServiceService) {
  //this.editObject = {doctorId:'', doctorName: '', userName: '' ,  mobileNumber: '', password: '',department:''};
  }

  ngOnInit() {
    this.userName1 = localStorage.getItem('userName');
    this.service.getDoctorByUserName(this.userName1).subscribe((result: any) => { console.log(result); this.editObject = result; });
  }
  searchByUserName(){
    console.log(this.userName);
    this.service2.getAppointmentsByUserName(this.userName).subscribe((result: any) => {
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
  showEditPopup(editObject: any) {
    //this.editObject = doctor;
     jQuery('#doctorModel').modal('show');
  }
  logOut(): void{
    console.log("From SmartDoc");
    this.service3.setHospitalLoggedOut();
    this.service3.setDoctorLoggedOut();
    this.router.navigate(['../hospital-login']);
  }
  updateDoctor() {
    console.log("Inside Update in VS"+this.editObject);
    if(this.editObject.doctorName =='' ||this.editObject.mobileNumber==''||this.editObject.department =='' )
    alert("Please enter all the fields")
    else{
      this.editObject.doctorName=this.editObject.doctorName[0].toUpperCase() + this.editObject.doctorName.slice(1);
      this.editObject.department=this.editObject.department[0].toUpperCase() + this.editObject.department.slice(1);
    this.service.updateDoctor(this.editObject).subscribe((result: any) => { 
      if(result === 0){
        alert("Update failed -_-");
      } 
      else{
        alert("Update Successful");}});
      }
    
  }
  refresh(){
    window.location.reload();
}


}
