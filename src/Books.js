import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getAllBooks } from './fetch-utils';


export default class Books extends Component {
    state = {
        books: []
    }

    componentDidMount = async () => {
        const books = await getAllBooks();
        this.setState({books: books })
    }

    render() {
        //cool zone-re-renders on state change
        console.log(this.state.books);
        return (
            <div className="main">
                <div className="list">
                    {/* map out the list of books fetched from the API */}
                    {this.state.books.map(book => 
                        <Link to={`/books/${book.id}`}>
                            <li className={book.category}>
                                <img src={`/assets/${book.image}`} alt={book.title} />
                                <h3>{book.title}</h3>
                                <h4>{book.author}</h4>
                            </li>
                        </Link>
                    )}
                </div>
            </div>
        )
    }
}
