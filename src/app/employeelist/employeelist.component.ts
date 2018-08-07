import { Component, OnInit } from '@angular/core';
import { Employee } from '../employeeadd/employeeadd.model';
import { DataServiceService } from '../data-service.service';



@Component({
  selector: 'employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  private employeeList: Employee[];
  private columns: any[];


  constructor(private dataService: DataServiceService) {
    this.employeeList = [];
   }

  ngOnInit() {

    this.employeeList = this.dataService.getEmployee();
    this.columns = this.dataService.getEmpColumns();
  }

}
