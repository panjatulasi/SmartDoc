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
import { HospitalLoginComponent } from './hospital-login/hospital-login.component';
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
import { UploadReportComponent } from './upload-report/upload-report.component';
import { PatientPreviousComponent } from './patient-previous/patient-previous.component';
import { PatientAppointmentStatusComponent } from './patient-appointment-status/patient-appointment-status.component';
import { ViewReportComponent } from './view-report/view-report.component';
import { PatientReportComponent } from './patient-report/patient-report.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { AssistantAuthGuard } from './assistant-auth.guard';
import { DoctorAuthGuard } from './doctor-auth.guard';
import { PatientAuthGuard } from './patient-auth.guard';


const appRoot: Routes = [
  // {path: 'patient-appointment',canActivate: [PatientAuthGuard], component: PatientAppointmentComponent},
  // {path: 'doctor-appointment',canActivate: [AuthGuardGuard,DoctorAuthGuard], component: DoctorAppointmentComponent},
  //  {path: 'hospital-login', component: HospitalLoginComponent},
  //  {path: 'search-by-user-name',canActivate: [AuthGuardGuard,DoctorAuthGuard], component: SearchByUserNameComponent},
  //  {path: 'upcoming-appointments', canActivate: [AuthGuardGuard,DoctorAuthGuard],component: UpcomingAppointmentsComponent},
  //  {path: 'previous-records',canActivate: [AuthGuardGuard,DoctorAuthGuard], component: PreviousRecordsComponent},
  //  {path: 'upload-report', canActivate: [AuthGuardGuard,AssistantAuthGuard],component: UploadReportComponent},
  //  {path: 'patient-previous',canActivate: [PatientAuthGuard], component: PatientPreviousComponent},
  //  {path: 'patient-appointment-status',canActivate: [PatientAuthGuard], component: PatientAppointmentStatusComponent},
  //  {path: 'view-report',canActivate: [AuthGuardGuard,DoctorAuthGuard], component: ViewReportComponent},
  //  {path: 'patient-report',canActivate: [PatientAuthGuard], component: PatientReportComponent},
  //  //{path: '', component: SearchByUserNameComponent},
  //   {path: '', component: HospitalLoginComponent},
  // {path: 'patient-login',component: PatientLoginComponent},
  // {path: 'pharmacist-login',canActivate: [AuthGuardGuard], component: PharmacistLoginComponent},
  // {path: 'doctor-login',canActivate: [AuthGuardGuard],canLoad:[AuthGuardGuard], component: DoctorLoginComponent},
  // {path: 'assistant-login',canActivate: [AuthGuardGuard], component: AssistantLoginComponent},
  // {path: 'patient-register', component: PatientRegisterComponent},
  // {path: 'pharmacist-register',canActivate: [AuthGuardGuard], component: PharmacistRegisterComponent},
  // {path: 'doctor-register',canActivate: [AuthGuardGuard], component: DoctorRegisterComponent},
  // {path: 'assistant-register',canActivate: [AuthGuardGuard], component: AssistantRegisterComponent},
  // {path: 'patient-profile-edit',canActivate: [PatientAuthGuard],component: PatientProfileEditComponent},
  // {path: 'assistant-profile-edit',canActivate: [AuthGuardGuard,AssistantAuthGuard],component: AssistantProfileEditComponent},
  // {path: 'doctor-profile-edit',canActivate: [AuthGuardGuard,DoctorAuthGuard],component: DoctorProfileEditComponent},

  // {path: 'pharmacist-profile-edit',canActivate: [AuthGuardGuard],component: PharmacistProfileEditComponent}
  {path: 'patient-appointment', component: PatientAppointmentComponent},
  {path: 'doctor-appointment', component: DoctorAppointmentComponent},
   {path: 'hospital-login', component: HospitalLoginComponent},
   {path: 'search-by-user-name', component: SearchByUserNameComponent},
   {path: 'upcoming-appointments', component: UpcomingAppointmentsComponent},
   {path: 'previous-records', component: PreviousRecordsComponent},
   {path: 'upload-report', component: UploadReportComponent},
   {path: 'patient-previous',component: PatientPreviousComponent},
   {path: 'patient-appointment-status', component: PatientAppointmentStatusComponent},
   {path: 'view-report',component: ViewReportComponent},
   {path: 'patient-report', component: PatientReportComponent},
   //{path: '', component: SearchByUserNameComponent},
    {path: '', component: HospitalLoginComponent},
  {path: 'patient-login',component: PatientLoginComponent},
  {path: 'pharmacist-login',  component: PharmacistLoginComponent},
  {path: 'doctor-login', component: DoctorLoginComponent},
  {path: 'assistant-login', component: AssistantLoginComponent},
  {path: 'patient-register', component: PatientRegisterComponent},
  {path: 'pharmacist-register', component: PharmacistRegisterComponent},
  {path: 'doctor-register',  component: DoctorRegisterComponent},
  {path: 'assistant-register',  component: AssistantRegisterComponent},
  {path: 'patient-profile-edit', component: PatientProfileEditComponent},
  {path: 'assistant-profile-edit', component: AssistantProfileEditComponent},
  {path: 'doctor-profile-edit', component: DoctorProfileEditComponent},

  {path: 'pharmacist-profile-edit', component: PharmacistProfileEditComponent}



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
    HospitalLoginComponent,
    PatientProfileEditComponent,
    DoctorProfileEditComponent,
    AssistantProfileEditComponent,
    PharmacistProfileEditComponent,
    PatientAppointmentComponent,
    DoctorAppointmentComponent,
    UpcomingAppointmentsComponent,
    SearchByUserNameComponent,
    PreviousRecordsComponent,
    UploadReportComponent,
    PatientPreviousComponent,
    PatientAppointmentStatusComponent,
    ViewReportComponent,
    PatientReportComponent,
  ],
  imports: [

BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoot),
  ],
  providers: [AuthGuardGuard,AssistantAuthGuard,DoctorAuthGuard,PatientAuthGuard,{provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
