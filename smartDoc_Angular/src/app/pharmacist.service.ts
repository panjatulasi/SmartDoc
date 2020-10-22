import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PharmacistService {

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
   getAllPharmacist(): any {
    return this.httpClient.get('smartDoc/webapi/myresource/getAllEmployees');
   }
   getPharmacistById(empId: any) {
    return this.httpClient.get('smartDoc/webapi/myresource/getEmployeeById/' + empId);
   }
   registerPharmacist(pharmacist: any) {
    return this.httpClient.post('smartDoc/webapi/myresource/registerPharmacist',  pharmacist);
   }
   deletePharmacist(employee: any) {
    return this.httpClient.delete('smartDoc/webapi/myresource/deleteEmp/' + employee.empId);
   }
   getPharmacist(userName:any,password:any): any {
    return this.httpClient.get('smartDoc/webapi/myresource/getPharmacistByUserPass/'+userName+'/'+password);
  }

   updatePharmacist(editObject: any) {
    return this.httpClient.put('smartDoc/webapi/myresource/updatePharmacist', editObject);
   }

   getAllDepartments(): any {
    return this.httpClient.get('smartDoc/webapi/myresource/getDepartments');
   }
   getPharmacistByUserName(userName: String) {
    return this.httpClient.get('smartDoc/webapi/myresource/getPharmacistByUserName/' + userName);
   }
}
