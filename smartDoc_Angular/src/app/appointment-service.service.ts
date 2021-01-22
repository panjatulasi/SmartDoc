import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

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

}
