import React, { Component } from 'react';

class Book extends Component {
  
    render() {
        return(
            
            <div className="book">
                <div className="book-top">

                    {/* check if book does not have a thumbnail */}
                    {typeof this.props.book.imageLinks === 'undefined'? 
                    (<div className="book-cover" style={{ width: 128, height: 193, 
                        backgroundImage: `url(http://via.placeholder.com/128x193?text=no%20image)`}}></div>
                        )  : (
                            <div className="book-cover" style={{ width: 128, height: 193, 
                        backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`}}></div>
                    )}
                    <div className="book-shelf-changer">

                        <select onChange={event => this.props.onShelfChange(this.props.book, this.props.book.shelf, event.target.value)}>                                       
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading" selected={this.props.book.shelf === 'currentlyReading'}>Currently Reading</option>
                            <option value="wantToRead" selected={this.props.book.shelf === 'wantToRead'}>Want to Read</option>
                            <option value="read" selected={this.props.book.shelf === 'read'}>Read</option>
                            <option value="none" selected={typeof this.props.book.shelf === 'undefined'}>None</option>
                        </select>

                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                
                {/* check if book does not have an author */}
                {typeof this.props.book.authors === 'undefined'?
                (
                    <div className="book-authors">{'Name Unkown'}</div>
                ) : (
                    <div className="book-authors">{this.props.book.authors}</div>
                )}

            </div>
        
        )
    }

}

export default Book;

