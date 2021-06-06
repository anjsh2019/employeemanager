import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServiceUrl= environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiServiceUrl}/employee/all`);
  }

  public addEmployee(employee: Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.apiServiceUrl}/employee/add`,employee);
  }

  public updateEmployee(employee: Employee):Observable<Employee>{
    return this.http.put<Employee>(`${this.apiServiceUrl}/employee/update`,employee);
  }

  public deleteEmployee(employeeId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/employee/delete/${employeeId}`);
  }
}
