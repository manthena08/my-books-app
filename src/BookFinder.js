import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SingleBook from './SingleBook'
class BookFinder extends Component {
	state = {
		query: '',
		availableBook: []
	}

	updateQuery = (value) => {
		this.setState({
			query: value.trim()
		})
		BooksAPI.search(value, 20)
			.then(data => {
				this.setState({
					availableBook: data
				})
			})

	}
	render() {
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
						{this.state.availableBook.map((book) => (
							<SingleBook book={book} />
						))}

					</ol>
				</div>
			</div>
		)
	}
}

export default BookFinder
