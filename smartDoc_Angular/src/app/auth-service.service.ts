import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private isHospitalLogged: any;
  private isDoctorLogged: any;
  private isAssistantLogged: any;
  private isPatientLogged: any;
  constructor(private httpClient: HttpClient) {
    this.isHospitalLogged = false;
    this.isDoctorLogged = false;
    this.isAssistantLogged = false;
    this.isPatientLogged = false;
   }
   setHospitalLoggedIn(): void { // login success
    this.isHospitalLogged = true;
   }
   setHospitalLoggedOut(): void { // logout success
    this.isHospitalLogged = false;
   }
   getHospitalLogged(): any { // call this in AuthGuard
     return this.isHospitalLogged;
   }
   setDoctorLoggedIn(): void { // login success
    this.isDoctorLogged = true;
   }
   setDoctorLoggedOut(): void { // logout success
    this.isDoctorLogged = false;
   }
   getDoctorLogged(): any { // call this in AuthGuard
     return this.isDoctorLogged;
   }
   setAssistantLoggedIn(): void { // login success
    this.isAssistantLogged = true;
   }
   setAssistantLoggedOut(): void { // logout success
    this.isAssistantLogged = false;
   }
   getAssistantLogged(): any { // call this in AuthGuard
     return this.isAssistantLogged;
   }
   setPatientLoggedIn(): void { // login success
    this.isPatientLogged = true;
   }
   setPatientLoggedOut(): void { // logout success
    this.isPatientLogged = false;
   }
   getPatientLogged(): any { // call this in AuthGuard
     return this.isPatientLogged;
   }
}
