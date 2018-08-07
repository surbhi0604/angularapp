import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDeleteComponent } from './employee-delete.component';
import { FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'
describe('EmployeeDeleteComponent', () => {
  let component: EmployeeDeleteComponent;
  let fixture: ComponentFixture<EmployeeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDeleteComponent ],
      imports:[
       
        FormsModule,
        HttpModule
        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
