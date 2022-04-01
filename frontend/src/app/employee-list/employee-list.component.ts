import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
   this.reloadData();
  }
  reloadData(){
    this.employees = this.employeeService.getEmployeeList();
  }
}
