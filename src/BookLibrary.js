import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SingleBook from './SingleBook'
class BookLibrary extends Component {


	render() {
		let currentReading = this.props.availableBooks.filter(book => book.shelf === 'currentlyReading')
		let wantToRead = this.props.availableBooks.filter(book => book.shelf === 'wantToRead')
		let read = this.props.availableBooks.filter(book => book.shelf === 'read')
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Currently Reading</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{currentReading.map(book => (
										<SingleBook book={book} />
									))}
								</ol>
							</div>
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Want to Read</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{wantToRead.map(book => (
										<SingleBook book={book} />
									))}
								</ol>
							</div>
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Read</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{read.map(book => (
										<SingleBook book={book} />
									))}
								</ol>
							</div>
						</div>
					</div>
				</div>
				<div className="open-search">
					<Link to="/search">Add a book</Link>
				</div>
			</div>
		)
	}
}

export default BookLibrary