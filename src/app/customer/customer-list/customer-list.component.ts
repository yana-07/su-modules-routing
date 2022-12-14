import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CustomerService, IUser } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, OnDestroy {
  text = new Promise((resolve, reject) => { 
    setTimeout(() => {
      resolve('show some text');
    }, 3000)
  });
  
  customers: IUser[] = [];
  
  customers$!: Observable<IUser[]>;

  //private subscription!: Subscription;

  constructor(private customerService: CustomerService) { }
  
  ngOnInit(): void {
    // this.subscription = this.customerService.getUsers$().subscribe(customers => 
    //   this.customers = customers
    // );

    this.customers$ = this.customerService.getUsers$();
  }

  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }

}
