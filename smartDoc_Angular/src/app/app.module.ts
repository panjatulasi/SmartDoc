import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { AssistantLoginComponent } from './assistant-login/assistant-login.component';
import { AssistantRegisterComponent } from './assistant-register/assistant-register.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';
import { PharmacistRegisterComponent } from './pharmacist-register/pharmacist-register.component';
import { PharmacistLoginComponent } from './pharmacist-login/pharmacist-login.component';
import { HomeComponent } from './home/home.component';
import { HospitalLoginComponent } from './hospital-login/hospital-login.component';
import { HospitalRelatedComponent } from './hospital-related/hospital-related.component';
import { CommonLoginComponent } from './common-login/common-login.component';

const appRoot: Routes = [
  {path: '', component: HomeComponent},
  {path: 'patient-login', component: PatientLoginComponent},
  {path: 'hospital-related/pharmacist-login', component: PharmacistLoginComponent},
  {path: 'hospital-related/doctor-login', component: DoctorLoginComponent},
  {path: 'hospital-related/assistant-login', component: AssistantLoginComponent},
  {path: 'patient-register', component: PatientRegisterComponent},
  {path: 'hospital-related/pharmacist-register', component: PharmacistRegisterComponent},
  {path: 'hospital-related/doctor-register', component: DoctorRegisterComponent},
  {path: 'hospital-related/assistant-register', component: AssistantRegisterComponent},
  {path: 'hospital-related', component: HospitalRelatedComponent},
  {path: 'common-login',component: CommonLoginComponent},



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
    HomeComponent,
    HospitalLoginComponent,
    HospitalRelatedComponent,
    CommonLoginComponent,
  ],
  imports: [

BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoot)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
