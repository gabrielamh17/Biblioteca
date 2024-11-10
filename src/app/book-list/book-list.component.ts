import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  editingBook: Book | null = null;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id);
    this.books = this.bookService.getBooks();
  }

  editBook(book: Book) {
    this.editingBook = { ...book }; 
  }

  saveBook() {
    if (this.editingBook) {
      this.bookService.updateBook(this.editingBook); 
      this.books = this.bookService.getBooks(); 
      this.editingBook = null; 
    }
  }

  cancelEdit() {
    this.editingBook = null
  }
}

