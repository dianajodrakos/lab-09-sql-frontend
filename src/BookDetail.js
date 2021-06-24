import React, { Component } from 'react'
import { getOneBook, editBook, deleteBook, getAllCategories, getAllAuthors, getAllLanguages } from './fetch-utils.js';

export default class BookDetail extends Component {
    //set state
    state = {
        sku: 0,
        title: '',
        author_id: 0,
        image: '',
        description: '',
        pages: 0,
        year: 0,
        language_id: 0,
        publisher: '',
        isbn: '',
        category_id: 0,
        price: '',
        stock: false,
        id: 0,
    }

    //component mount
    componentDidMount = async () => {
        const id = this.props.match.params.id;
        
        const book = await getOneBook(id);
        const authors = getAllAuthors();
        const categories = getAllCategories();
        const languages = getAllLanguages();

        this.setState({
            sku: book.sku,
            title: book.title,
            author: book.author,
            author_id: book.author_id,
            image: book.image,
            description: book.description,
            pages: book.pages,
            year: book.year,
            language: book.language,
            language_id: book.language_id,
            publisher: book.publisher,
            isbn: book.isbn,
            category: book.category,
            category_id: book.category_id,
            price: book.price,
            stock: book.stock,
            id: id,
            authors: authors,
            categories: categories,
            languages: languages,
        })
    
    }

    //event handlers
    //can you write a generic handleChange function that takes one argument??
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <li className={this.state.category}>
                    <div className="image">
                        <img src={`/assets/${this.state.image}`} alt={this.state.title} />
                    </div>
                    <div className="data">
                        <h3>{this.state.title}</h3>
                        <h4>{this.state.author}</h4>
                        <p className="description">{this.state.description}</p>
                        <p className="metadata">{this.state.pages} pages | Originally Published in {this.state.year} | {this.state.publisher} | {this.state.language} | ISBN-10: {this.state.isbn}</p>
                        <p className="price">${this.state.price}</p>
                        {/* <p className="button">
                            <button type="button" className="qty down">-</button>
                            <input id="1" type="number" min="0" max="10" readonly="true" />
                            <button type="button" className="qty up">+</button><button type="button" className="add-to-cart">Add to Cart</button>
                         </p> GOTTA BRING THIS FRANKENSTEIN TO LIFE */}
                    </div>
                </li>
                <p>UPDATE BOOK LISTING</p>
                <div>
                    <form>
                        <label>
                            Description
                            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                        </label>
                        <button>Update Listing</button>
                    </form>
                </div>
            </div>
        )
    }
}
