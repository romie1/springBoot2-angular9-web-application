import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  id:number;
  book = new Book();

  constructor(private route: ActivatedRoute, private router: Router, private bookService:BookService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookService.getById(this.id).subscribe(
      data => {
          console.log(data);
          this.book = data;
      },
        error => console.log('error', error)
    );
  }

  goBack(){
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

}
