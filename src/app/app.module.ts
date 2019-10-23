import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { Mock

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    CustomersComponent,
    OrdersComponent,
    MockCusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
