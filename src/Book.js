import React, { Component } from 'react';

class Book extends Component {
    
    state = {value: ''};
  
    render() {
        return(
            
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`}}></div>
                        <div className="book-shelf-changer">

                        <select defaultValue={this.props.book.shelf} onChange={event => this.props.onShelfChange(this.props.book, this.props.book.shelf, event.target.value)}>>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading" selected={this.props.book.shelf === 'currentlyReading'}>Currently Reading</option>
                            <option value="wantToRead" selected={this.props.book.shelf === 'wantToRead'}>Want to Read</option>
                            <option value="read" selected={this.props.book.shelf === 'read'}>Read</option>
                            <option value="none">None</option>
                        </select>

                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors}</div>
                </div>
            
           
        )
    }

}

export default Book;

