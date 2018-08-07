import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Employee } from '../employeeadd/employeeadd.model';


@Component({
  selector: 'employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {


  private employeeObj;
  model: Employee = new Employee();
  
  constructor(private dataService: DataServiceService) {

   }

   deleteEmployee()
   {
     this.dataService.deleteEmployee(this.model.employeeID);
   }
  
   ngOnInit() {
  }

}
