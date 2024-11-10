import { Component } from '@angular/core';
import { BookService, Book } from '../services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string = '';
  searchResults: Book[] = [];

  constructor(private bookService: BookService) {}

  searchBooks() {
    this.searchResults = this.bookService.searchBooks(this.query);
  }
}

