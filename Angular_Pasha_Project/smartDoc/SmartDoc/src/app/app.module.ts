import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { AssistantLoginComponent } from './assistant-login/assistant-login.component';
import { AssistantRegisterComponent } from './assistant-register/assistant-register.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';
import { PharmacistRegisterComponent } from './pharmacist-register/pharmacist-register.component';
import { PharmacistLoginComponent } from './pharmacist-login/pharmacist-login.component';

const appRoot: Routes = [
];
@NgModule({
  declarations: [
    AppComponent,
    PatientLoginComponent,
    PatientRegisterComponent,
    AssistantLoginComponent,
    AssistantRegisterComponent,
    DoctorLoginComponent,
    DoctorRegisterComponent,
    PharmacistRegisterComponent,
    PharmacistLoginComponent,
  ],
  imports: [

BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoot)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
