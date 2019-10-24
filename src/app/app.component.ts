import { Component } from '@angular/core';
import {CUSTOMERS} from './shared/mock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  CUSTOMERS = CUSTOMERS;
  title = 'Fruits';
}
