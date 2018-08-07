import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Employee } from '../employeeadd/employeeadd.model';
 

@Component({
  selector: 'employeeadd',
  templateUrl: './employeeadd.component.html',
  styleUrls: ['./employeeadd.component.css']
})
export class EmployeeaddComponent implements OnInit {

  private employeeObj;
  model: Employee = new Employee();
  
  constructor(private dataService: DataServiceService) {

   }

   addEmployee() {
    let bodyObj = [
        {
            "usersso": this.model.userSSO,
            "username": this.model.userName,
            "employeeid": this.model.employeeID,
            "location": this.model.location,
            "backgroundflag": this.model.backGroundFlag,
            "joindate": "2011-09-14"
        }
    ]
    this.dataService.addEmployee(bodyObj);
}

  ngOnInit() {
  }

}
