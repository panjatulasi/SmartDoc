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
   getDoctor(loginId:any,password:any): any {
    return this.httpClient.get('RestAPI/webapi/myresource/getDoctorByUserPass/'+loginId+'/'+password);
  }
   setUserLoggedOut(): void { // logout success
    this.isUserLogged = false;
   }
   getUserLogged(): any { // call this in AuthGuard
     return this.isUserLogged;
   }
   getAllDoctor(): any {
    return this.httpClient.get('RestAPI/webapi/myresource/getAllEmployees');
   }
   getDoctorById(empId: any) {
    return this.httpClient.get('RestAPI/webapi/myresource/getEmployeeById/' + empId);
   }
   registerDoctor(doctor: any) {
    return this.httpClient.post('RestAPI/webapi/myresource/registerDoctor',  doctor);
   }
   deleteDoctor(employee: any) {
    return this.httpClient.delete('RestAPI/webapi/myresource/deleteEmp/' + employee.empId);
   }

   updateDoctor(editObject: any) {
    return this.httpClient.put('RESTAPI/webapi/myresource/updateEmp', editObject);
   }

   getAllDepartments(): any {
    return this.httpClient.get('RestAPI/webapi/myresource/getDepartments');
   }
}
