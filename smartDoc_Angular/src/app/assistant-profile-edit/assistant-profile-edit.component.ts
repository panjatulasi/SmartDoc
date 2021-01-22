import { Component, OnInit } from '@angular/core';
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
  constructor(private service: AssistantService) {
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
  updateAssistant() {
    console.log("Inside Update in VS"+this.editObject);
    this.service.updateAssistant(this.editObject).subscribe((result: any) => { 
      if(result === 0){
        alert("Update failed -_-");
      } 
      else{
        alert("Update Successful");}});
    
  }

}
