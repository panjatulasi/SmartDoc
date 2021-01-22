import { Component, OnInit } from '@angular/core';
import {PatientService} from './../patient.service';
import * as CryptoJS from 'crypto-js';
import { stringify } from '@angular/compiler/src/util';
import { verifyHostBindings } from '@angular/compiler';
declare var jQuery: any;
@Component({
  selector: 'app-patient-profile-edit',
  templateUrl: './patient-profile-edit.component.html',
  styleUrls: ['./patient-profile-edit.component.css']
})
export class PatientProfileEditComponent implements OnInit {
  patient: any;
  editObject: any;
  userName1: String;
  constructor(private service: PatientService) {
  //this.editObject = {patientId:0, patientName: 'xyz', gender: 'M', userName: 'abcd' ,age:1,  mobileNumber: 1234, password: 'LKG'};
  this.userName1 = localStorage.getItem('userName');
    //this.userName1="18B01A05A8@svecw.edu.in";
    
    this.service.getPatientByUserName(this.userName1).subscribe((result: any) => { 
      //console.log(result);
      console.log("Inside Patient Profile"+result);
      this.editObject = result;
      this.editObject.userName=JSON.stringify(this.editObject.userName);
      this.editObject.patientName=JSON.stringify(this.editObject.patientName);
      this.editObject.gender=JSON.stringify(this.editObject.gender);
      console.log("inside Profile-edit "+this.editObject.userName);
      });
    //alert("Inside Edit"+this.editObject.userName);
    //alert(this.editObject);
    
  }
  

  ngOnInit() {
    console.log("HIIIII");
    
    //console.log(this.patient);
  }
  

  showEditPopup(patient: any) {
console.log("Inside Show popup : "+this.editObject);
    //this.editObject = patient;
     jQuery('#patientModel').modal('show');
  }
  updatePatient() {
    console.log("Inside Update in VS"+this.editObject);
    this.service.updatePatient(this.editObject).subscribe((result: any) => { 
      if(result === 0){
      alert("Update failed -_-");
    } 
    else{
      alert("Update Successful");}});
    
  }

}
