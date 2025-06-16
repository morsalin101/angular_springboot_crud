import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { EmployeeService } from '../employee-service';
import { Employee } from '../employee'; // Assuming you have an Employee model defined
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-emplyoee-list',
  imports: [RouterModule],
  templateUrl: './emplyoee-list.html',
  styleUrl: './emplyoee-list.css'
})
export class EmployeeList implements OnInit {
  employees: Employee[] = [];
  newEmployee: Employee = { name: '', email: '', department: '' }; // Initialize for form

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(
      data => {
        this.employees = data;
      },
      error => {
        console.error('Error fetching employees:', error);
      }
    );
  }

  addEmployee(): void {
    this.employeeService.createEmployee(this.newEmployee).subscribe(
      response => {
        console.log('Employee added:', response);
        this.newEmployee = { name: '', email: '', department: '' }; // Reset form
        this.loadEmployees(); // Reload list to show new employee
      },
      error => {
        console.error('Error adding employee:', error);
      }
    );
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(
      () => {
        console.log(`Employee with ID ${id} deleted.`);
        this.loadEmployees(); // Reload list after deletion
      },
      error => {
        console.error(`Error deleting employee with ID ${id}:`, error);
      }
    );
  }

  // You would add methods for getEmployeeById and updateEmployee similarly
}

