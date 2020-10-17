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
    return this.httpClient.get('RestAPI/webapi/myresource/getAllEmployees');
   }
   getPharmacistById(empId: any) {
    return this.httpClient.get('RestAPI/webapi/myresource/getEmployeeById/' + empId);
   }
   registerPharmacist(pharmacist: any) {
    return this.httpClient.post('RestAPI/webapi/myresource/registerPharmacist/',  pharmacist);
   }
   deletePharmacist(employee: any) {
    return this.httpClient.delete('RestAPI/webapi/myresource/deleteEmp/' + employee.empId);
   }
   getPharmacist(loginId:any,password:any): any {
    return this.httpClient.get('RestAPI/webapi/myresource/getPharmacistByUserPass/'+loginId+'/'+password);
  }

   updatePharmacist(editObject: any) {
    return this.httpClient.put('RESTAPI/webapi/myresource/updateEmp', editObject);
   }

   getAllDepartments(): any {
    return this.httpClient.get('RestAPI/webapi/myresource/getDepartments');
   }
}
