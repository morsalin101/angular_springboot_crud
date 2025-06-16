import { Routes } from '@angular/router';
import { EmployeeList } from './post/emplyoee-list/emplyoee-list';
import { AddEmployee } from './post/add-employee/add-employee';
import { EditEmployee } from './post/edit-employee/edit-employee';

export const routes: Routes = [
    {
        path: '',
        component: EmployeeList
    },
    {
        path: 'add-employee',
        component: AddEmployee
    },
   { path: 'edit/:id', component: EditEmployee }
];
