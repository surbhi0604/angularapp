import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import{Department} from '../../departmentmain/departmentadd/departmentadd.model';


@Component({
  selector: 'departmentdelete',
  templateUrl: './departmentdelete.component.html',
  styleUrls: ['./departmentdelete.component.css']
})
export class DepartmentdeleteComponent implements OnInit {

  private departmentObj;
  model: Department = new Department();
  
  constructor(private dataService: DataServiceService) { }

  deleteDepartment()
  {
    this.dataService.deleteDepartment(this.model.deptId);
  }

  ngOnInit() {
  }

}
