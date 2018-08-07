import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import{Department} from '../../departmentmain/departmentadd/departmentadd.model';

@Component({
  selector: 'departmentupdate',
  templateUrl: './departmentupdate.component.html',
  styleUrls: ['./departmentupdate.component.css']
})
export class DepartmentupdateComponent implements OnInit {
  model: Department = new Department();

  constructor(private dataService: DataServiceService) { }

  updateDepartment() {
    let bodyObj = [
        {
            "deptId": this.model.deptId,
            "deptName": this.model.deptName,
            "deptManager": this.model.deptManager,
            
        }
    ]
  
    this.dataService.updateDepartment(bodyObj);
  }


  ngOnInit() {
  }

}
