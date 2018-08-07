import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  users:Array<any>;

  constructor( private dataService: DataServiceService ){

  }

  ngOnInit()
  {
    
  }
}

