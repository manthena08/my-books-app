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
    BooksAPI.getAll().then(books => {
      this.setState( {
        books: books
      })
    })   
  }
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookLibrary availableBooks={this.state.books}/>
        )} />

        <Route path="/search" render={() => (
          <BookFinder />
        )} />
      </div>
    )
  }
}

export default BooksApp
