import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGetAllComponent } from './book-get-all.component';

describe('BookGetAllComponent', () => {
  let component: BookGetAllComponent;
  let fixture: ComponentFixture<BookGetAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookGetAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
