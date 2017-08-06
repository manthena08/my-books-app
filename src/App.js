import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookFinder from './BookFinder'
import BookLibrary from './BookLibrary'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
     this.getAllBooks()
  }

  getAllBooks=()=> {
    BooksAPI.getAll().then(books => {
        this.setState( {
            books: books
        })
    }) 
  }

  updateBookShelf = (book,shelf) => {
    BooksAPI.update(book,shelf)
      .then(res => {
        this.getAllBooks()
      })
  }

  getBookShelf = (id) => {

    let [bookMatched] = this.state.books.filter(b => b.id === id)
    return bookMatched ? bookMatched.shelf : false
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookLibrary availableBooks={this.state.books}
            updateShelf={this.updateBookShelf}/>
        )} />

        <Route path="/search" render={() => (
          <BookFinder getBookShelf={this.getBookShelf} updateShelf={this.updateBookShelf}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
