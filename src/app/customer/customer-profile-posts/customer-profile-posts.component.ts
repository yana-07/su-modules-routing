import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService, IPost } from '../customer.service';

@Component({
  selector: 'app-customer-profile-posts',
  templateUrl: './customer-profile-posts.component.html',
  styleUrls: ['./customer-profile-posts.component.css']
})
export class CustomerProfilePostsComponent implements OnInit { 
  posts: IPost[] = [];
  isLoading = false;

  constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // const id = this.activatedRoute.parent!.snapshot.params['id'];
     this.isLoading = true;

    // this.customerService.getPostsByUserId$(id).subscribe(posts => {
    //   this.posts = posts;
    //   this.isLoading = false;
    // })

    this.activatedRoute.data.subscribe(data => {
      this.posts = data['posts'];
      this.isLoading = false;
    })
  }
}
