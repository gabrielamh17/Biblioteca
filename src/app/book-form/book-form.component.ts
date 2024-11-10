import { Component } from '@angular/core';
import { BookService, Book } from '../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  book: Book = { id: 0, titulo: '', autor: '', year: new Date().getFullYear(), coverImage: '' };

  constructor(private bookService: BookService) {}

  saveBook() {
    if (this.book.id) {
      this.bookService.updateBook(this.book);
    } else {
      this.bookService.addBook(this.book);
    }
    this.resetForm();
  }

  resetForm() {
    this.book = { id: 0, titulo: '', autor: '', year: new Date().getFullYear(), coverImage: '' };
  }
}
