import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { CustomerService, IUser } from '../customer.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  id: number = -1;
  customer!: IUser;
  isLoading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    //this.id = +this.activatedRoute.snapshot.params['id'];
    //const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.activatedRoute.params
    .pipe(
      tap(params => { // нов params обект при всяка смяна на id-to в раута  
        this.id = +params['id']
        this.titleService.setTitle('Profile ' + this.id);
        this.isLoading = true;
      }),
      switchMap(params => {  // switchMap<Params, IUser> - заменяме единият стрийм с друг
        return this.customerService.getUserById$(params['id'])
      })
    )
    .subscribe(   
      {
        next: user => {
        this.customer = user;
        this.isLoading = false;
        },
        error: error => {
          this.isLoading = false;
          console.error('error happened', error);
        }   
      }) 
  }
}
