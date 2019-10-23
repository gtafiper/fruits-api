import { Component, OnInit } from '@angular/core';
import {Customer} from '../shared/customer.model';
import {CUSTOMERS} from '../shared/mock';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  selectedCustomer: Customer;
   customers = CUSTOMERS;
  constructor() { }

  ngOnInit() {
  }
  onSelect(cus: Customer): void {
    this.selectedCustomer = cus;
  }
}
