import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssistantService {

  private isUserLogged: any;
  constructor(private httpClient: HttpClient) {
    this.isUserLogged = false;
   }
   setUserLoggedIn(): void { // login success
    this.isUserLogged = true;
   }
   getAssistant(loginId:any,password:any): any {
    return this.httpClient.get('RestAPI/webapi/myresource/getAssistantByUserPass/'+loginId+'/'+password);
  }
   setUserLoggedOut(): void { // logout success
    this.isUserLogged = false;
   }
   getUserLogged(): any { // call this in AuthGuard
     return this.isUserLogged;
   }
   getAllAssistant(): any {
    return this.httpClient.get('smartDoc/webapi/myresource/getAllEmployees');
   }
   getAssistantById(empId: any) {
    return this.httpClient.get('RestAPI/webapi/myresource/getEmployeeById/' + empId);
   }
   registerAssistant(assistant: any) {
    return this.httpClient.post('RestAPI/webapi/myresource/registerAssistant/',  assistant);
   }
   deleteAssistant(employee: any) {
    return this.httpClient.delete('RestAPI/webapi/myresource/deleteEmp/' + employee.empId);
   }

   updateAssistant(editObject: any) {
    return this.httpClient.put('RESTAPI/webapi/myresource/updateEmp', editObject);
   }

   getAllDepartments(): any {
    return this.httpClient.get('RestAPI/webapi/myresource/getDepartments');
   }
}
