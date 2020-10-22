import { Component, OnInit } from '@angular/core';
import {PatientService} from './../patient.service';
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
  this.editObject = {patientId:'', patientName: '', gender: '', userName: '' ,age:'',  mobileNumber: '', password: ''};
  }

  ngOnInit() {
    this.userName1 = localStorage.getItem('userName');
    this.service.getPatientByUserName(this.userName1).subscribe((result: any) => { console.log(result); this.editObject = result; });
    //console.log(this.patient);
  }

  showEditPopup(patient: any) {
    this.editObject = patient;
     jQuery('#patientModel').modal('show');
  }
  updatePatient() {
    console.log("Inside Update in VS"+this.editObject);
    this.service.updatePatient(this.editObject).subscribe((result: any) => { if(result) {alert("Update Successful");}});
    
  }

}
