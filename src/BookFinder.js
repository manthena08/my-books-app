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
			query: value
		},this.searchQuery)

	}
	
	searchQuery = () => {
		if (this.state.query) {
			BooksAPI.search(this.state.query, 20)
				.then(data => {
					console.log(data)
					this.setState({
						showBook: data
					})
				})
		}
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
						{this.state.showBook.length > 0 && (
							this.state.showBook.map((data) => (
								<SingleBook book={data} key={data.id} />
							))
						)}
						{this.state.showBook.length <= 0 && (
							<div>No Results</div>
						)}



					</ol>
				</div>
			</div>
		)
	}
}

export default BookFinder
