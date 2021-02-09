import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentServiceService } from '../appointment-service.service';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {
  reportList:any;
  dupReportList:any;
  constructor(private router: Router,private service: AppointmentServiceService,private service1: AuthServiceService) {
    this.service.getReports().subscribe((result: any) => {
      console.log(result); 
      this.dupReportList = result;
      for(var i=0;i<this.dupReportList.length;i++){
        this.dupReportList[i].date=new Date(this.dupReportList[i].date+86400000).toISOString().slice(0,10);
        if(result[i].report.split("_0_").length >1)
        this.dupReportList[i].name=result[i].report.split("_0_")[1];
        else
        this.dupReportList[i].name=result[i].report.split("_0_")[0];

      }
      this.reportList=this.dupReportList;
     });
      localStorage.setItem('showUserName',null);
   }
   logOut(): void{
    console.log("From SmartDoc");
    this.service1.setDoctorLoggedOut();
    this.router.navigate(['../hospital-login']);
  }

  ngOnInit() {
  }

}
