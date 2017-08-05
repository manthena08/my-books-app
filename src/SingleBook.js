import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SingleBook extends Component {
	static PropTypes = {
		book: PropTypes.object.isRequired,
		updateShelf: PropTypes.func.isRequired
	}
	render() {
		let book = this.props.book
		return (
			<li >
				<div className="book">
					<div className="book-top">
						<div className="book-cover"
							style={{backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
						<div className="book-shelf-changer">
							<select value={book.shelf} onChange={(event) => this.props.updateShelf(book,event.target.value)}>
								<option value="none" disabled>Move to...</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
					</div>
					<div className="book-title">{book.title}</div>
					<div className="book-authors">{book.authors}</div>
				</div>
			</li>
		)
	}
}

export default SingleBook