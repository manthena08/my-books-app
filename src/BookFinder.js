import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import SingleBook from './SingleBook'

class BookFinder extends Component {
	static PropTypes = {
		getBookShelf: PropTypes.func.isRequired,
		updateShelf: PropTypes.func.isRequired
	}

	state = {
		query: '',
		showBook: []
	}

	updateQuery = (value) => {
		if (!value.trim()) {
			value = value.trim()
		}
		this.setState({
			query: value
		}, this.searchQuery)
	}

	searchQuery = () => {
		let { query } = this.state
		if (query) {
			BooksAPI.search(query, 20)
				.then((response) => {
					if (response.length > 0) {
						this.setState({
							showBook: this.updateBookself(response)
						})
					} else {
						this.clearResults()
					}
				})
		} else {
			this.clearResults()
		}
	}

	clearResults = () => {
		this.setState({
			showBook: []
		})
	}

	updateBookself = (data) => {
		let updatedBookResults = []
		updatedBookResults = data.map(book => {
			let bookExists = this.props.getBookShelf(book.id)
			if (bookExists) {
				book.shelf = bookExists
			}
			return book
		})
		return updatedBookResults
	}


	render() {
		let showBook = this.state.showBook
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
						<input type="text" placeholder="Search by title or author"
							value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} />
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{showBook.length > 0 && (
							showBook.map((book, index) => (
								<SingleBook book={book} key={book.id} updateShelf={this.props.updateShelf} />
							))
						)}
						{showBook.length <= 0 && (
							<div>No Results</div>
						)}
					</ol>
				</div>
			</div>
		)
	}
}

export default BookFinder
