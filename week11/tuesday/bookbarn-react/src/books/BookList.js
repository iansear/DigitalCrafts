import React, {Component} from 'react'

class BookList extends Component {

    render() {
        let books = this.props.list.map((book) => {
            let key = book.year + book.title + book.author
            let imageURL = "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/" + books.imageURL
            return (<h3 key={key} className="book">{book.title} - {book.author} - {book.year}</h3>
                    <img src={imageURL}/>)
        })

        return (<div className="booklist">
                {books}
                </div>)
    }
}

export default BookList