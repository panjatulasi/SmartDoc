import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentServiceService } from '../appointment-service.service';
import { AssistantService } from '../assistant.service';
import { AuthServiceService } from '../auth-service.service';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-upload-report',
  templateUrl: './upload-report.component.html',
  styleUrls: ['./upload-report.component.css']
})
export class UploadReportComponent implements OnInit {
  appointments:any;
  appointmentsDup : any;
  patient:any;
  userName:any;
  x:any;
  imageUrl: string;
  fileToUpload: File = null;
  reader: FileReader;
  date: any;
  today: any;
  description:any;
  maxId:any;

  constructor(private router: Router,private service: AppointmentServiceService,private service1: PatientService,private service2: AssistantService,private service3: AuthServiceService) {
    this.today=new Date().toISOString().slice(0,10); 
    this.x = 0;
    this.userName='';
  }
  logOut(): void{
    console.log("From SmartDoc");
    this.service3.setAssistantLoggedOut();
    this.router.navigate(['../hospital-login']);
  }

  ngOnInit() {
    this.service.getMaxId().subscribe((result: any) => {
      console.log(result);
      this.maxId=result[0]+1;
      console.log(this.maxId);
    });
  }
  model;
  select(d){
    this.date=d;
    console.log("Date"+d);
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
  handleFileInput(file: FileList){
    console.log(file.item(0));
    this.fileToUpload = file.item(0);
    console.log(this.fileToUpload.name);
    this.reader = new FileReader();
    this.reader.readAsDataURL(this.fileToUpload);
    this.reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
  }
  
  OnSubmit(fileForm: any) {
    if(this.date =='' ||this.description==null||this.fileToUpload==null )
    alert("please enter all fields");
    else {
    fileForm.userName = this.userName;
    fileForm.date = this.date;
    fileForm.description=this.description;
    fileForm.id=this.maxId;
    console.log("File Form"+fileForm);
    console.log("FileToUplaod="+this.fileToUpload);
    this.service2.uploadImage(fileForm, this.fileToUpload).subscribe((result:any)=>{
      if(result == 1){
      alert("Report Uploaded Successfully :)");
      this.refresh();
      }
      else{
        alert("Report Upload Failed :( ");
        this.refresh();
      }
    }
    );
  }
}
  refresh(){
    window.location.reload();
}

}
