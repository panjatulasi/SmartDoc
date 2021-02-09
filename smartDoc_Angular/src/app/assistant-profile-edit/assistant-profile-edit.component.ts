import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import {AssistantService} from './../assistant.service';
declare var jQuery: any;

@Component({
  selector: 'app-assistant-profile-edit',
  templateUrl: './assistant-profile-edit.component.html',
  styleUrls: ['./assistant-profile-edit.component.css']
})
export class AssistantProfileEditComponent implements OnInit {

  assistant: any;
  editObject: any;
  userName1: String;
  constructor(private router: Router,private service: AssistantService,private service1: AuthServiceService) {
  this.editObject = {assistantId:'', assistantName: '', userName: '' ,  mobileNumber: '', password: ''};
  }


  ngOnInit() {
    this.userName1 = localStorage.getItem('userName');
    this.service.getAssistantByUserName(this.userName1).subscribe((result: any) => { console.log(result); this.editObject = result; });
  }
  showEditPopup(assistant: any) {
    this.editObject = assistant;
     jQuery('#assistantModel').modal('show');
  }
  logOut(): void{
    console.log("From SmartDoc");
    this.service1.setHospitalLoggedOut();
    this.service1.setAssistantLoggedOut();
    this.router.navigate(['../hospital-login']);
  }
  updateAssistant() {
    console.log("Inside Update in VS"+this.editObject);
    if(this.editObject.assistantName =='' ||this.editObject.mobileNumber=='')
    alert("Please enter all the fields")
    else{
      this.editObject.assistantName=this.editObject.assistantName[0].toUpperCase() + this.editObject.assistantName.slice(1);
    this.service.updateAssistant(this.editObject).subscribe((result: any) => { 
      if(result === 0){
        alert("Update failed -_-");
      } 
      else{
        alert("Update Successful");}});
      }
    
  }

}
