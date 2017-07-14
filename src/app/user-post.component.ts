/**
 * Created by Samuel on 13/7/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './service/data.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'user-post',
  template:`
    <h3>Post Submit Success</h3>
    <br/>
    You Post Info as follows: <br/>
    {{post}}
    <br/>
    <button (click)="onNavigate()">Go Back</button>
  `,
  providers:[]
})


export class PostComponent implements OnInit {
  private post: any;
  // private sub : Subscription;

  constructor(private router: Router, private dataHelper: DataService) {}

  ngOnInit() {
    // this.sub = this.router.data.subscribe(v => {
    //   console.log(v);
    //   this.post = v;
    // });

    this.post = this.dataHelper.getInfo();
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }


  onNavigate() {
    // Imperative Routing
    this.router.navigate(['/']);
  }
}
