import { Injectable } from '@angular/core';

export interface Book {
  id: number;
  titulo: string;
  autor: string;
  year: number;
  coverImage?: string;  
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [];

  constructor() {
    this.loadBooks();
  }

  private loadBooks() {
    const storedBooks = localStorage.getItem('books');
    this.books = storedBooks ? JSON.parse(storedBooks) : [];
  }

  private saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  addBook(book: Book) {
    book.id = this.books.length > 0 ? Math.max(...this.books.map(b => b.id)) + 1 : 1;
    this.books.push(book);
    this.saveBooks();
  }

  getBooks(): Book[] {
    return this.books;
  }

  searchBooks(query: string): Book[] {
    return this.books.filter(book =>
      book.titulo.toLowerCase().includes(query.toLowerCase()) ||
      book.autor.toLowerCase().includes(query.toLowerCase()) ||
      book.year.toString().includes(query)
    );
  }

  updateBook(updatedBook: Book) {
    const index = this.books.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook; 
      this.saveBooks();
    }
  }

  deleteBook(id: number) {
    this.books = this.books.filter(book => book.id !== id);
    this.saveBooks();
  }
}
