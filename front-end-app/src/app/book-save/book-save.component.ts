import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-save',
  templateUrl: './book-save.component.html',
  styleUrls: ['./book-save.component.css']
})
export class BookSaveComponent implements OnInit {

  formBook: FormGroup;
  book = new Book();

  constructor(formBuilder: FormBuilder, private bookService: BookService,  private router: Router) {
    this.formBook = formBuilder.group({id:0, author:'', title:'', genre:'Travel', pages:0, price:0});
   }

  ngOnInit(): void {
  }

  save(){
    this.bookService.save(this.formBook.value).subscribe(
        response => {console.log('done', response),
                      this.book = this.formBook.value;
                      this.gotoList();
        },
        error => console.log('error', error)
    );
  }
  gotoList() {
    this.router.navigate(['/books']);
  }




}
