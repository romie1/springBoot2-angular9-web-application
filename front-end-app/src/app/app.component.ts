import { Component } from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book Management System';
  subtitle = 'Angular 9 + Spring Boot CRUD Web Application'

  constructor(private titleService: Title, private meta: Meta){
    this.titleService.setTitle('Book Management System');
    meta.updateTag({name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'});
    meta.addTag({name: 'description', content: 'Angular 9 + Spring Boot CRUD Web Application'},true);
    meta.addTag({name: 'author', content: 'Romielyn Casio'},true);
  }
}
