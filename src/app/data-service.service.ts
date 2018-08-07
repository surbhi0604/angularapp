import { Injectable } from '@angular/core';

import {Http, Headers, RequestOptions} from '@angular/http';
import {Employee} from '../app/employeeadd/employeeadd.model';  
import{Department} from '../app/departmentmain/departmentadd/departmentadd.model'



@Injectable({
  providedIn: 'root'
})


export class DataServiceService {

  empCols: any[];
  deptCols: any[];
  private employeeList: Employee[]
  private deptList: Department[]

  constructor(private _http:Http) {
    
    this.employeeList=[]
    this.empCols=[
      { field: 'username', header: 'User Name' },
      { field: 'usersso', header: 'User SSO' },
      { field: 'employeeid', header: 'Emp ID' },
      { field: 'location', header: 'Location' },
      { field: 'backgroundflag', header: 'Background check Flag' }
    
    ]

    this.deptList=[]
    this.deptCols=[
    {field:'deptId',header:'Department ID' },
    {field: 'deptName', header: 'Department Name'},
    {field: 'deptManager', header: 'Department Manager'}

    ]
   }

   

   addEmployee(employeeObj)
   {
     this._http.post('http://localhost:3000/api/employee/create', employeeObj)
  .subscribe(
    res => {
      console.log(res);
    },
    err => {
      console.log("Error occured in addEmployee()");
    }
  );

   }

   addDept(departmentObj)
   {
     this._http.post('http://localhost:3000/api/department/create', departmentObj)
  .subscribe(
    res => {
      console.log(res);
    },
    err => {
      console.log("Error occured in addDepartment()");
    }
  );

   }

   updateEmployee(employeeObj)
   {
    this._http.post('http://localhost:3000/api/employee/update', employeeObj)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured in updateEmployee()");
      }
    );
  
   }

   updateDepartment(departmentObj)
   {
    this._http.post('http://localhost:3000/api/department/update', departmentObj)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured in updateDepartment()");
      }
    );
  
   }


   deleteEmployee(employeeID) {
    //console.log('employeeObj :' + JSON.stringify(employeeObj));
    this._http.get('http://localhost:3000/api/employee/delete/' + employeeID)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured in deleteEmployee()");
        }
      );
  }

  deleteDepartment(departmentID) {
    //console.log('employeeObj :' + JSON.stringify(employeeObj));
    this._http.get('http://localhost:3000/api/department/delete/' + departmentID)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured in deleteDepartment()");
        }
      );
  }

  

  getEmployee() {
    this.employeeList = [];
    this._http.get('http://localhost:3000/api/employee/list').subscribe(response => {
      let userdata = [];
      if (response.json().hits && response.json().hits.hits) {
        userdata = response.json().hits.hits;
        if (userdata.length > 0) {
          userdata.forEach(user => {
            this.employeeList.push(user._source);
            //console.log(user._source);
          });
        }
      }
    },
      err => {
        console.log("Error occured in getEmployee()");
      }
    )
    return this.employeeList;
  }
  getEmpColumns(): string[] {
    return this.empCols
  };

  getDepartment() {
    this.deptList = [];
    this._http.get('http://localhost:3000/api/department/list').subscribe(response => {
      let deptData = [];
      if (response.json().hits && response.json().hits.hits) {
        deptData = response.json().hits.hits;
        if (deptData.length > 0) {
          deptData.forEach(user => {
            this.deptList.push(user._source);
            //console.log(user._source);
          });
        }
      }
    },
      err => {
        console.log("Error occured in getDepartment()");
      }
    )
    return this.deptList;
  }
  
  getDeptColumns(): string[] {
    return this.deptCols
  };

}
