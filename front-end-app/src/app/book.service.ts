import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  readonly url: string = 'http://localhost:8081/books';
  
  constructor(private http: HttpClient) { }

  public findAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  public save(book: Book): Observable<Book> {
    return this.http.post<Book>(this.url, book);
  }

  public delete(id: number): Observable<{}> {
    return this.http.delete<Book>(this.url + '/' + id);
  }

  public getById(id: number): Observable<Book> {
    return this.http.get<Book>(this.url + '/' + id);
  }

  public update(id:number, book: Book): Observable<Book> {
    return this.http.patch<Book>(this.url + '/' + id, JSON.stringify(book));
  }
}
