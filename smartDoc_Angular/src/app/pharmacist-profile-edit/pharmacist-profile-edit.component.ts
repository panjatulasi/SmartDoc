import { Component, OnInit } from '@angular/core';
import {PharmacistService} from './../pharmacist.service';
declare var jQuery: any;

@Component({
  selector: 'app-pharmacist-profile-edit',
  templateUrl: './pharmacist-profile-edit.component.html',
  styleUrls: ['./pharmacist-profile-edit.component.css']
})
export class PharmacistProfileEditComponent implements OnInit {

  pharmacist: any;
  editObject: any;
  userName1: String;
  constructor(private service: PharmacistService) {
  this.editObject = {pharmacistId:'', pharmacistName: '', userName: '' ,  mobileNumber: '', password: ''};
  }

  ngOnInit() {
    this.userName1 = localStorage.getItem('userName');
    this.service.getPharmacistByUserName(this.userName1).subscribe((result: any) => { console.log(result); this.editObject = result; });
  
  }
  showEditPopup(assistant: any) {
    this.editObject = assistant;
     jQuery('#pharmacistModel').modal('show');
  }
  updatePharmacist() {
    console.log("Inside Update in VS"+this.editObject);
    this.service.updatePharmacist(this.editObject).subscribe((result: any) => { 
      if(result === 0){
        alert("Update failed -_-");
      } 
      else{
        alert("Update Successful");}});
    
  }


}
