import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SingleBook from './SingleBook'

class BookShelf extends Component {
  static PropTypes = {
    availableBooks: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  render() {
    let currentlyReading = this.props.availableBooks.filter(book => book.shelf === 'currentlyReading')
    let wantToRead = this.props.availableBooks.filter(book => book.shelf === 'wantToRead')
    let read = this.props.availableBooks.filter(book => book.shelf === 'read')
    let AllBooks = {
      currentlyReading: {
        title: 'Currently Reading',
        books: currentlyReading
      },
      wantToRead: {
        title: 'Want to Read',
        books: wantToRead
      },
      read: {
        title: 'Read',
        books: read
      }
    }
    return (
      <div className="list-books-content">
        <div>
          {Object.keys(AllBooks).map((keyName, index) => (
            <div className="bookshelf" key={index}>
              <h2 className="bookshelf-title">{AllBooks[keyName].title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {AllBooks[keyName].books.length > 0 && (
                    AllBooks[keyName].books.map((book, index) => (
                      <SingleBook book={book} key={book.id} updateShelf={this.props.updateShelf} />
                    ))
                  )}
                  {AllBooks[keyName].books.length <= 0 && (
                    <li>
                      No Book Avaiable
										</li>
                  )}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default BookShelf
