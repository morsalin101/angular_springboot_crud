import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee-service';
import { Employee } from '../employee';

@Component({
  selector: 'app-edit-employee',
  imports: [FormsModule],
  templateUrl: './edit-employee.html',
  styleUrls: ['./edit-employee.css']
})
export class EditEmployee implements OnInit {
  employee: Employee = {
    id: 0,
    name: '',
    email: '',
    department: ''
  };

  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.employeeService.getEmployeeById(id).subscribe({
        next: (data) => {
          this.employee = data;
          console.log('Employee data fetched:', this.employee);
        },
        error: (err) => {
          this.errorMessage = 'Employee not found.';
        }
      });
    }
  }

  onUpdate(): void {
 

    if (typeof this.employee.id === 'number') {
      this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe({
        next: () => {
          this.successMessage = 'Employee updated successfully!';
          this.router.navigate(['/']);
        },
        error: () => {
          this.errorMessage = 'Failed to update employee.';
        }
      });
    } else {
      this.errorMessage = 'Invalid employee ID.';
    }
  }

  goToEmployeeList(): void {
    this.router.navigate(['/']);
  }
}
