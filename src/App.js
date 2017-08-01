import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookFinder from './BookFinder'
import BookLibrary from './BookLibrary'

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookLibrary />
        )} />

        <Route path="/search" render={() => (
          <BookFinder />
        )} />
      </div>
    )
  }
}

export default BooksApp
