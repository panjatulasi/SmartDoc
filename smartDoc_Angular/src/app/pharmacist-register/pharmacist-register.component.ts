import { Component, OnInit } from '@angular/core';
import { PharmacistService } from './../pharmacist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pharmacist-register',
  templateUrl: './pharmacist-register.component.html',
  styleUrls: ['./pharmacist-register.component.css']
})
export class PharmacistRegisterComponent implements OnInit {

  pharmacist: any;
  department: any;
  constructor(private router: Router,private service: PharmacistService) {
    this.pharmacist = {pharmacistId: '', pharmacistName: '', userName:'', mobileNumber: '', password: '' 
  };
}

  ngOnInit(): void {
  }
  register(): void {
    this.service.registerPharmacist(this.pharmacist).subscribe((result: any) => { this.router.navigate(['pharmacist-login']);} );
    console.log(this.pharmacist);
  }

}
