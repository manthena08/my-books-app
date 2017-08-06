import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class BookLibrary extends Component {
	static PropTypes = {
		availableBooks: PropTypes.array.isRequired,
		updateShelf: PropTypes.func.isRequired
	}

	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				{this.props.availableBooks.length > 0 && (
					<BookShelf availableBooks={this.props.availableBooks} updateShelf={this.props.updateShelf}/>
				)}
				<div className="open-search">
					<Link to="/search">Add a book</Link>
				</div>
			</div>
		)
	}
}

export default BookLibrary