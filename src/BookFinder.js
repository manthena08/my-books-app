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
		if(!value.trim()){
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
				.then((data) => {
					if (JSON.stringify(data) !== JSON.stringify(this.state.showBook)) {
						this.setState({
							showBook: data
						})
					}
				})
		} else {
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
