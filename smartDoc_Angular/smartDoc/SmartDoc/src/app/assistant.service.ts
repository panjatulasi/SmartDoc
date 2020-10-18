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
   getAssistant(userName:any,password:any): any {
    return this.httpClient.get('smartDoc/webapi/myresource/getAssistantByUserPass/'+userName+'/'+password);
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
    return this.httpClient.get('smartDoc/webapi/myresource/getEmployeeById/' + empId);
   }
   registerAssistant(assistant: any) {
    return this.httpClient.post('smartDoc/webapi/myresource/registerAssistant',  assistant);
   }
   deleteAssistant(employee: any) {
    return this.httpClient.delete('smartDoc/webapi/myresource/deleteEmp/' + employee.empId);
   }

   updateAssistant(editObject: any) {
    return this.httpClient.put('smartDoc/webapi/myresource/updateEmp', editObject);
   }

   getAllDepartments(): any {
    return this.httpClient.get('smartDoc/webapi/myresource/getDepartments');
   }
}
