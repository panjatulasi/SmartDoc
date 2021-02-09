import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {
report:any;
  constructor(private httpClient: HttpClient) { }
  registerAppointment(appointments: any) {
    console.log(appointments.patientUserName+"Inside Service");
   return this.httpClient.post('smartDoc/webapi/myresource/registerAppointment',appointments);
  }
  getAllAppointments(department:any): any {
    return this.httpClient.get('smartDoc/webapi/myresource/getAllAppointments/'+department);
   }
   getUpcomingAppointments(department:any): any {
    return this.httpClient.get('smartDoc/webapi/myresource/getUpcomingAppointments/'+department);
   }
   getUpcomingPatientAppointments(userName:any): any {
    return this.httpClient.get('smartDoc/webapi/myresource/getUpcommingPatientAppointmentsByUserName/'+userName);
   }
   deleteAppointment(appointment: any) {
    return this.httpClient.delete('smartDoc/webapi/myresource/deleteAppointment/' + appointment.appointmentId);
   }

   updateAppointment(editObject: any) {
    return this.httpClient.put('smartDoc/webapi/myresource/updateAppointment', editObject);
   }
   getAllDepartments(): any {
    return this.httpClient.get('smartDoc/webapi/myresource/getAllDepartments/');
   }
   getAppointmentsByUserName(userName: String) {
     console.log(userName);
    return this.httpClient.get('smartDoc/webapi/myresource/getAppointmentsByUserName/' + userName);
   }
   getReports(){
    console.log('Inside Service...'+localStorage.getItem('showUserName'));
    return this.httpClient.get('smartDoc/webapi/myresource/getReports/'+localStorage.getItem('showUserName'));
 }
 getMaxId():any{
  return this.httpClient.get('smartDoc/webapi/myresource/getMaxId/');
 }

}
