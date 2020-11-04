import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  id: number;
  book: Book;

  constructor(private route: ActivatedRoute, private router: Router, private bookService:BookService) { }

  ngOnInit(): void {
    this.book = new Book();

    this.id = this.route.snapshot.params['id'];
    
    this.bookService.getById(this.id)
      .subscribe(data => {
        console.log(data)
        this.book = data;
      }, error => console.log(error));
  }

  updateBook() {
    this.bookService.update(this.book.id, this.book)
      .subscribe(data => {
        console.log(data);
        this.gotoDetail(this.book.id);
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateBook();    
  }

  gotoDetail(id: number) {
    this.router.navigate(['books/details/', id]);
  }

}
