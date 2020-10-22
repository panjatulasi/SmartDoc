import { Component, OnInit } from '@angular/core';
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
  constructor(private service: DoctorService) {
  this.editObject = {doctorId:'', doctorName: '', userName: '' ,  mobileNumber: '', password: ''};
  }

  ngOnInit() {
    this.userName1 = localStorage.getItem('userName');
    this.service.getDoctorByUserName(this.userName1).subscribe((result: any) => { console.log(result); this.editObject = result; });
  }
  showEditPopup(editObject: any) {
    //this.editObject = doctor;
     jQuery('#doctorModel').modal('show');
  }
  updateDoctor() {
    console.log("Inside Update in VS"+this.editObject);
    this.service.updateDoctor(this.editObject).subscribe((result: any) => { if(result) {alert("Update Successful");}});
    
  }

}
