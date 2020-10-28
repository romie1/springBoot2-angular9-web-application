import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookGetAllComponent } from './book-get-all/book-get-all.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookSaveComponent } from './book-save/book-save.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'books', component: BookGetAllComponent },
  { path: 'save', component: BookSaveComponent },
  { path: 'books/details/:id', component: BookDetailsComponent },
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, BookGetAllComponent, 
                                  BookSaveComponent, BookDetailsComponent, 
                                  PageNotFoundComponent, AboutComponent];