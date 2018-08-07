import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeaddComponent } from './employeeadd.component';
import { FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'

describe('EmployeeaddComponent', () => {
  let component: EmployeeaddComponent;
  let fixture: ComponentFixture<EmployeeaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeaddComponent ],
      imports:[
       
        FormsModule,
        HttpModule
        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
