import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import{Department} from '../../departmentmain/departmentadd/departmentadd.model';



@Component({
  selector: 'departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {

  private departmentList: Department[];
  private columns: any[];

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.departmentList = this.dataService.getDepartment();
    this.columns = this.dataService.getDeptColumns();
  
  }

}
