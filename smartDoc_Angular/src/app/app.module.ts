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
import { PatientHomeComponent } from './patient-home/patient-home.component';
import { AssistantHomeComponent } from './assistant-home/assistant-home.component';
import { PatientProfileEditComponent } from './patient-profile-edit/patient-profile-edit.component';
import { DoctorProfileEditComponent } from './doctor-profile-edit/doctor-profile-edit.component';
import { AssistantProfileEditComponent } from './assistant-profile-edit/assistant-profile-edit.component';
import { PharmacistProfileEditComponent } from './pharmacist-profile-edit/pharmacist-profile-edit.component';
import { PatientAppointmentComponent } from './patient-appointment/patient-appointment.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { UpcomingAppointmentsComponent } from './upcoming-appointments/upcoming-appointments.component';
import { SearchByUserNameComponent } from './search-by-user-name/search-by-user-name.component';
import { PreviousRecordsComponent } from './previous-records/previous-records.component';

const appRoot: Routes = [
  {path: 'patient-appointment', component: PatientAppointmentComponent},
  {path: 'doctor-appointment', component: DoctorAppointmentComponent},
   {path: 'hospital-login', component: HospitalLoginComponent},
   {path: 'search-by-user-name', component: SearchByUserNameComponent},
   {path: 'upcoming-appointments', component: UpcomingAppointmentsComponent},
   {path: 'previous-records', component: PreviousRecordsComponent},
   {path: '', component: SearchByUserNameComponent},
   // {path: '', component: HospitalLoginComponent},
  {path: 'patient-login', component: PatientLoginComponent},
  {path: 'pharmacist-login', component: PharmacistLoginComponent},
  {path: 'doctor-login', component: DoctorLoginComponent},
  {path: 'assistant-login', component: AssistantLoginComponent},
  {path: 'patient-register', component: PatientRegisterComponent},
  {path: 'pharmacist-register', component: PharmacistRegisterComponent},
  {path: 'doctor-register', component: DoctorRegisterComponent},
  {path: 'assistant-register', component: AssistantRegisterComponent},
  {path: 'hospital-related', component: HospitalRelatedComponent},
  {path: 'common-login',component: CommonLoginComponent},
  {path: 'patient-profile-edit',component: PatientProfileEditComponent},
  {path: 'assistant-profile-edit',component: AssistantProfileEditComponent},
  {path: 'doctor-profile-edit',component: DoctorProfileEditComponent},

  {path: 'pharmacist-profile-edit',component: PharmacistProfileEditComponent}



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
    PatientHomeComponent,
    AssistantHomeComponent,
    PatientProfileEditComponent,
    DoctorProfileEditComponent,
    AssistantProfileEditComponent,
    PharmacistProfileEditComponent,
    PatientAppointmentComponent,
    DoctorAppointmentComponent,
    UpcomingAppointmentsComponent,
    SearchByUserNameComponent,
    PreviousRecordsComponent,
  ],
  imports: [

BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoot)
  ],
  providers: [{provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
