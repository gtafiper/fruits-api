import { Component, OnInit } from '@angular/core';
import {Customer} from '../shared/customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customer: Customer = {
    firstename: 'per',
    id: 1,
    lastename: 'person'
  }
  constructor() { }

  ngOnInit() {
  }

}
