import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

    state = {
        query: '',
        searchResults: []
    }

    updateQuery = (query) => {
        this.setState({ query: query });
        if (this.state.query && this.state.query.length > 1) {
            
            console.log(query);
            BooksAPI.search(this.state.query).then((results) => {
                this.setState({ searchResults : results });
                console.log(this.state.query);
                console.log(this.state.searchResults);
                console.log(this.state.searchResults.length);                
                console.log(results);

            })
        }
    }

    // updateQuery = (query) => {
    //     this.setState({ query: query });
    //     console.log(query);
    // }

    // componentDidMount() {
    //     BooksAPI.search(this.state.query).then((results) => {
    //         this.setState({ searchResults : results });
    //         console.log(this.state.query);
    //         console.log(results);
    //     })

    //   }

      
    // updateQuery (query) {

    //     this.setState({ query: query });
    //     console.log(query);
    //     BooksAPI.search(this.state.query).then(function(results){
    //         this.setState({ searchResults : results });
    //         console.log(this.state.query);
    //         console.log(this.state.searchResults);
    //         console.log(results);
    //     })
 
    // }
    
    
    render() {

        if(this.state.query !== '' && this.state.searchResults.length === 20) {
            return(
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" className="close-search">Close</Link>
                        <div className="search-books-input-wrapper">
                        {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
    
                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                        */}
    
                        <input type="text" 
                        placeholder="Search by title or author"
                        value={this.state.query}
                        onChange={(event) => {this.updateQuery(event.target.value)}} />
                        
                        </div>
                    </div>
                    <div className="search-books-results">
                        
                        <ol className="books-grid">
                       
                        {this.state.searchResults.map((book) => (
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                                        <div className="book-shelf-changer">
    
                                        <select value='currentlyReading' onChange={(event) => {this.setState({value: event.target.value}); this.props.onShelfChange(book, book.shelf, event.target.value)} }>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
    
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>
                            ))}
                        </ol>
                    </div>
                </div>
    
            )

        }

        else if(this.state.query !== '' && this.state.searchResults.length !== 20) {
            return(
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" className="close-search">Close</Link>
                        <div className="search-books-input-wrapper">
                        {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
    
                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                        */}
    
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
        else {
            return(
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" className="close-search">Close</Link>
                        <div className="search-books-input-wrapper">
                        {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
    
                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                        */}
    
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
    }
}


export default SearchBooks;