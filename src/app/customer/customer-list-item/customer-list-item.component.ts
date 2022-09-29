import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../customer.service';

@Component({
  selector: 'app-customer-list-item',
  templateUrl: './customer-list-item.component.html',
  styleUrls: ['./customer-list-item.component.css']
})
export class CustomerListItemComponent implements OnInit {
  date: Date = new Date();
  limit: number = 15;

  @Input() customer!: IUser;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.customer.email = 'this-is-special-customer@abv.bg';
      // this.customer = {
      //   ...this.customer,
      //   email: 'this-is-special-customer@abv.bg'
      // }
    }, 2000)
  }

  handleExpand(): void {
    this.limit = Infinity;
  }

  // transform(value: string, limit: number = 10): string {
  //   console.log('CustomerListItemComponent#shorten', value)
  //   if (value.length > limit) {
  //     return `${value.substring(0, limit - 3)}...`;
  //   }

  //   return value;
  // }
}
