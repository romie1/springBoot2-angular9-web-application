import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-get-all',
  templateUrl: './book-get-all.component.html',
  styleUrls: ['./book-get-all.component.css']
})
export class BookGetAllComponent implements OnInit {
  books: Book[];

  constructor(private bookService:BookService, private router: Router) { }

  ngOnInit(): void {
    this.load();
  }

  load():void{
    this.bookService.findAll().subscribe(
      data => {this.books = data;
              this.load();},
      error => console.log('error', error)
    );
  }

  delete(book: Book) {
    this.bookService.delete(book.id)
      .subscribe(
        response => {
          console.log('response', response);
          this.load();
        },
        error => console.log('error', error));
  }

  bookDetails(id:number){
    this.router.navigate(['details/', id]);
  }

  trackById(index:number, book:Book): number {
    return book.id;
  }
}
