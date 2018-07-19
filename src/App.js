import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: []
  }

componentDidMount() {

  BooksAPI.getAll().then((books) => {
    this.setState({ books });
    console.log(books);
    console.log(typeof(books));
    books.map((book) => {
      console.log(book.title, book.id, book.shelf);
    })
  })

}

shelfChange = (book, shelf, value) => {
  console.log(book, shelf, value);

  BooksAPI.update(book, value).then(() => {

    BooksAPI.getAll().then(books => {
      this.setState({ books });
      // check that books state update
      //after shelf change
      console.log(this.state.books);
    });
    
  });
  
  console.log(this.state.books);
}

  render() {
    return (
      <div className="app">

        <Route path='/search' render={() => (
          <SearchBooks
          books={this.state.books}
          onShelfChange={this.shelfChange}/>
        )}/>

        <Route exact path='/' render={() => (
          <ListBooks 
          books={this.state.books}
          onShelfChange={this.shelfChange}/>
        )}/>

      </div>
      
    )
  }
}

export default BooksApp
