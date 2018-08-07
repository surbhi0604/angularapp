import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Employee } from '../employeeadd/employeeadd.model';
 

@Component({
  selector: 'employeeupdate',
  templateUrl: './employeeupdate.component.html',
  styleUrls: ['./employeeupdate.component.css']
})
export class EmployeeupdateComponent implements OnInit {

  private employeeObj;
  model: Employee = new Employee();
  

  constructor(private dataService: DataServiceService) {

    
   }

   updateEmployee() {
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
  
    this.dataService.updateEmployee(bodyObj);
  }

  ngOnInit() {
  }

}
