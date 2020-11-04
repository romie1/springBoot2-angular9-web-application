import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  template: `
  <h1 style="color:red; align:center; margin-top:30px"> <b> 
    PAGE NOT FOUND!!!!
  </b>  
  </h1>
  <br>
  <button type="button" class="btn btn-outline-info" (click)="goBack()">Back</button>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate([''], { relativeTo: this.route });
  }

}
