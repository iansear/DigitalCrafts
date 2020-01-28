import React, {Component} from 'react'
import BookList from './books/BookList'
import './Books.css'

class Books extends Component {

    constructor(props) {
        super(props)
        this.state = {
            books: [],
            selectedBooks: [],
            languages: []
        }
    }

    fetchMovies = async () => {
        let booksRAW = await fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
        let booksJSON = await booksRAW.json()
        this.setState({
            books: booksJSON,
            selectedBooks: booksJSON
        }, () => {
            this.getLanguages()
        })
    }

    uniqueLanguages = (languages) => {
        let languagesUnique = ['All']
        for(let i = 1; i < languages.length; i++) {
            if(!(languagesUnique.includes(languages[i]))) {
                languagesUnique.push(languages[i])
            }
        }
        return languagesUnique
    }

    getLanguages = () => {
        let languages = this.state.books.map((book) => book.language)
        let languagesUnique = this.uniqueLanguages(languages)
        this.setState({
            languages: languagesUnique
        })
    }

    booksByTitle = (title) => {
        let filteredBooks = this.state.books.filter((book) => {
            if(title.target.value === '') {
                return book
            } else if(book.title.toLowerCase().includes(title.target.value.toLowerCase())) {
                return book
            } else {
                return null
            }
        })
        this.setState({
            selectedBooks: filteredBooks
        })
    }

    booksByLanguage = (language) => {
        let filteredBooks = this.state.books.filter((book) => {
            if(language.target.value === 'All') {
                return book
            } else if(book.language === language.target.value) {
                return book
            } else {
                return null
            }
        })
        this.setState({
            selectedBooks: filteredBooks
        })
    }

    componentDidMount() {
        this.fetchMovies()
    }

    render() {
        let selectLanguage = this.state.languages.map((language) => <option key={language} value={language}>{language}</option>)
        return (<div>
                <h1>Books</h1>
                <input type="text" onChange={this.booksByTitle} placeholder="Search by Title" />
                <select onChange={this.booksByLanguage}>{selectLanguage}</select>
                    <BookList list={this.state.selectedBooks}/>
                </div>)
    }
}

export default Books 