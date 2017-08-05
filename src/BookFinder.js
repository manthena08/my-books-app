import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SingleBook from './SingleBook'

class BookFinder extends Component {
	state = {
		query: '',
		showBook: []
	}

	updateQuery = (value) => {
		this.setState({
			query: value.trim()
		}, this.searchQuery)

	}

	searchQuery = () => {
		if (this.state.query) {
			BooksAPI.search(this.state.query, 20)
				.then(data => {
					this.setState({
						showBook: data
					})
				})
		}else{
			this.setState({
				showBook: []
			})
		}
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
							showBook.map((book) => (
								<SingleBook book={book} key={book.id} updateShelf={(book, shelf) => this.props.updateShelf(book, shelf)} />
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
