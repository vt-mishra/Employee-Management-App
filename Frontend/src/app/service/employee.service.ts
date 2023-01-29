import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  EmpURL : string;
  

  constructor(private http : HttpClient) {

    this.EmpURL = 'http://localhost:3000/posts';
    
   }

   addEmployee(emp : Employee): Observable<Employee> {
     return this.http.post<Employee>(this.EmpURL,emp);
   }

   getAllEmployee(): Observable<Employee[]>{
     return this.http.get<Employee[]>(this.EmpURL);
   }

   updateEmployee(emp :Employee) : Observable<Employee>{
     return this.http.put<Employee>(this.EmpURL, emp);
   }

   deleteEmployee(emp : Employee) : Observable<Employee> {
     return this.http.delete<Employee>(this.EmpURL+'/'+emp.id);
   }
  

}
