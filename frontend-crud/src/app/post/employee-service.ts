import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8087/api/v1/employees'; // Adjust if your backend runs on a different port or path

  constructor(private http: HttpClient) { }

  /**
   * Fetches all employees from the backend.
   * GET /api/v1/employees
   */
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}`);
  }

  /**
   * Fetches a single employee by ID from the backend.
   * GET /api/v1/{id}
   */
  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  /**
   * Creates a new employee on the backend.
   * POST /api/v1
   */
  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}`, employee);
  }

  /**
   * Updates an existing employee on the backend.
   * PUT /api/v1/{id}
   */
  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUrl}/${id}`, employee);
  }

  /**
   * Deletes an employee from the backend.
   * DELETE /api/v1/{id}
   */
  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
