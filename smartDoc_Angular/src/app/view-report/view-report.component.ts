import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentServiceService } from '../appointment-service.service';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {
  reportList:any;
  dupReportList:any;
  constructor(private router: Router,private service: AppointmentServiceService) {
    this.service.getReports().subscribe((result: any) => {
      console.log(result); 
      this.dupReportList = result;
      for(var i=0;i<this.dupReportList.length;i++){
        this.dupReportList[i].date=new Date(this.dupReportList[i].date).toISOString().slice(0,10);
      }
      this.reportList=this.dupReportList;
     });
      localStorage.setItem('showUserName',null);
   }

  ngOnInit() {
  }

}
