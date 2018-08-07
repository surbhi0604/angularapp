import { Component, OnInit } from '@angular/core';


import { DataServiceService } from '../../data-service.service';
import{Department} from '../../departmentmain/departmentadd/departmentadd.model';




@Component({
  selector: 'departmentadd',
  templateUrl: './departmentadd.component.html',
  styleUrls: ['./departmentadd.component.css']
})
export class DepartmentaddComponent implements OnInit {

  private departmentObj;
  model: Department = new Department();

  constructor(private dataService: DataServiceService) { }

  addDept() {
    let bodyObj = [
        {
            "deptId": this.model.deptId,
            "deptName": this.model.deptName,
            "deptManager": this.model.deptManager
            
        }
    ]
    this.dataService.addDept(bodyObj);
}

  ngOnInit() {
  }

}
