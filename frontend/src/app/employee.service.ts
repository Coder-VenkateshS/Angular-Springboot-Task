import { Injectable } from '@angular/core';
import { Employee } from './employee';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/ems/api/employees';
  constructor(private http: HttpClient) { }
  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`,employee);
  }

  getEmployeeList():Observable<any>{
return this.http.get(`${this.baseUrl}`);
  }
 
}
