import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private isUserLogged: any;
  constructor(private httpClient: HttpClient) {
    this.isUserLogged = false;
   }
   setUserLoggedIn(): void { // login success
    this.isUserLogged = true;
   }
   getDoctor(userName:any,password:any): any {
    return this.httpClient.get('smartDoc/webapi/myresource/getDoctorByUserPass/'+userName+'/'+password);
  }
   setUserLoggedOut(): void { // logout success
    this.isUserLogged = false;
   }
   getUserLogged(): any { // call this in AuthGuard
     return this.isUserLogged;
   }
   getAllDoctor(): any {
    return this.httpClient.get('smartDoc/webapi/myresource/getAllEmployees');
   }
   getDoctorById(empId: any) {
    return this.httpClient.get('smartDoc/webapi/myresource/getEmployeeById/' + empId);
   }
   registerDoctor(doctor: any) {
    return this.httpClient.post('smartDoc/webapi/myresource/registerDoctor',  doctor);
   }
   deleteDoctor(employee: any) {
    return this.httpClient.delete('smartDoc/webapi/myresource/deleteEmp/' + employee.empId);
   }

   updateDoctor(editObject: any) {
    return this.httpClient.put('smartDoc/webapi/myresource/updateDoctor', editObject);
   }
   getAllDepartments(): any {
    return this.httpClient.get('smartDoc/webapi/myresource/getDepartments');
   }
   getDoctorByUserName(userName: String) {
    return this.httpClient.get('smartDoc/webapi/myresource/getDoctorByUserName/' + userName);
   }
}
