import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee-service'; // Adjust path if needed
import { Employee } from '../employee'; // Adjust path if needed

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.html',
  styleUrls: ['./add-employee.css']
})
export class AddEmployee {
  errorMessage: string = '';

  employee: Employee = {
    name: '',
    email: '',
    department: ''
  };

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  onSubmit(): void {
    const { name, email, department } = this.employee;

    this.employeeService.createEmployee(this.employee).subscribe({
      next: (response) => {
        console.log('Employee added successfully:', response);
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error adding employee:', error);
        this.errorMessage = 'Failed to add employee. Please try again.';
        alert(this.errorMessage);
      }
    });
  }

  goToEmployeeList(): void {
    this.router.navigate(['/']);
  }
}
