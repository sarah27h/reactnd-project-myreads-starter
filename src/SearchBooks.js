import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {

    state = {
        query: '',
        searchResults: [],
        value: 'none'
    }

    updateShelf = (book, shelf, value) => {
        this.props.onShelfChange(book, shelf, value);
    }

    updateQuery = (query) => {

        // this.setState is asynchronous
        // If you want to run code after the state update
        // you need to pass in a callback
        // clear searchResults to be sure prior search results are not shown
        this.setState({ query: query, searchResults: [] }, () => {
            if (this.state.query !== '') {
            
                console.log(query);
                BooksAPI.search(this.state.query).then((results) => {
                    this.setState({ searchResults : results },() => {
                        // add shelf property for book if it is already in my library (books array)
                        if (this.state.searchResults.length > 0) {
                            this.state.searchResults.map((searchedbook, index) => {
                                this.props.books.map((book) => {
                                    if(searchedbook.id === book.id) {
                                        searchedbook.shelf = book.shelf;
                                        this.setState({ value: searchedbook.shelf });
                                    } /*else {
                                        this.setState({ value: 'none' });
                                    }*/
                                    
                                })
                                console.log(searchedbook.shelf, index );
                            });
                        }
                    });
                    console.log(this.state.query);
                    console.log(this.state.searchResults);
                    console.log(this.state.searchResults.length);                
                    console.log(results);
    
                })
            }
        });
        
    }
    
    render() {

        // return this screen to display books returened after user enter in search field
        if(this.state.query !== '' && this.state.searchResults.length === 20) {
            return(
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" className="close-search">Close</Link>
                        <div className="search-books-input-wrapper">
                    
                        <input type="text" 
                        placeholder="Search by title or author"
                        value={this.state.query}
                        onChange={(event) => {this.updateQuery(event.target.value)}} />
                        
                        </div>
                    </div>
                    <div className="search-books-results">
                        
                        <ol className="books-grid">
                       
                            {this.state.searchResults.map((book, index) => (
                                
                                <li key={book.id}>

                                    <Book 
                                        book={book}
                                        onShelfChange={this.updateShelf}/>

                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
    
            )

        }

        // return blank screen when all of 
        // the text is deleted out of the search input box
        else if(this.state.searchResults.length === 0) {
            return(
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" className="close-search">Close</Link>
                        <div className="search-books-input-wrapper">
                        
                            <input type="text" 
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => {this.updateQuery(event.target.value)}} />
                        
                        </div>
                    </div>
                    <div className="search-books-results">
                        
                        <ol className="books-grid">
                        </ol>

                    </div>
                </div>
    
            )

        }
        // return screen with No results found when user enter invalid queries
        else {
            return(
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" className="close-search">Close</Link>
                        <div className="search-books-input-wrapper">
        
                            <input type="text" 
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => {this.updateQuery(event.target.value)}} />
                        
                        </div>
                    </div>
                    <div className="search-books-results">
                        
                        <div className="books-grid">
                            <p>No results found.</p>
                        </div>

                    </div>
                </div>
    
            )
        }
    }
}


export default SearchBooks;