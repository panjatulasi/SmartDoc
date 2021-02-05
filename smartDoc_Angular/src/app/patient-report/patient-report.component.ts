import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-report',
  templateUrl: './patient-report.component.html',
  styleUrls: ['./patient-report.component.css']
})
export class PatientReportComponent implements OnInit {
  reportList:any;
  dupReportList:any;
  constructor(private router: Router,private service: PatientService) { 
    this.service.getReports().subscribe((result: any) => {
      console.log(result); this.dupReportList = result;
      for(var i=0;i<this.dupReportList.length;i++){
        this.dupReportList[i].date=new Date(this.dupReportList[i].date).toISOString().slice(0,10);
      }
      this.reportList=this.dupReportList; });
      localStorage.setItem('showUserName',null);
  }

  ngOnInit() {
  }

}
