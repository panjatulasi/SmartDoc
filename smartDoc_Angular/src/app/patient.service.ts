import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private isUserLogged: any;
  constructor(private httpClient: HttpClient) {
    this.isUserLogged = false;
   }
   setUserLoggedIn(): void { // login success
    this.isUserLogged = true;
   }
   setUserLoggedOut(): void { // logout success
    this.isUserLogged = false;
   }
   getUserLogged(): any { // call this in AuthGuard
     return this.isUserLogged;
   }
   getAllPatients(): any {
    return this.httpClient.get('smartDoc/webapi/myresource/getAllEmployees');
   }
   getPatientById(empId: any) {
    return this.httpClient.get('smartDoc/webapi/myresource/getEmployeeById/' + empId);
   }
   registerPatient(patient: any) {
     //console.log(patient);
    return this.httpClient.post('smartDoc/webapi/myresource/registerPatient',  patient);
   }
   deletePatient(employee: any) {
    return this.httpClient.delete('smartDoc/webapi/myresource/deleteEmp/' + employee.empId);
   }

   updatePatient(editObject: any) {
    return this.httpClient.put('smartDoc/webapi/myresource/updateEmp', editObject);
   }

   getAllDepartments(): any {
    return this.httpClient.get('smartDoc/webapi/myresource/getDepartments');
   }
   getPatient(userName:any,password:any): any {
     //console.log(userName+" "+password);
     return this.httpClient.get('smartDoc/webapi/myresource/getPatientByUserPass/'+userName+'/'+password);
   }
}
