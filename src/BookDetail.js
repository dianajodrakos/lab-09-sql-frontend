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
        authors: '',
        categories: '',
        languages: '',
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

    handleSubmit = async (e) => {
        e.preventDefault();
        await editBook(this.props.match.params.id, {
            sku: this.state.sku, 
            title: this.state.title, 
            author_id: this.state.author_id, 
            image: this.state.image, 
            description: this.state.description, 
            pages: this.state.pages, 
            year: this.state.year, 
            language_id: this.state.language_id, 
            publisher: this.state.publisher, 
            isbn: this.state.isbn, 
            category_id: this.state.category_id, 
            price: this.state.price, 
            stock: this.state.stock, 
            id: this.props.match.params.id
        });
        this.props.history.push('/');
    }

    handleDelete = async (e) => {
        await deleteBook(this.state.id);
        this.props.history.push('/');
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
                            Description: 
                            <textarea type="text" size="200" maxLength="512" name="description" value={this.state.description} onChange={this.handleChange} />
                        </label>
                        <label>
                            Price: 
                            <input type="text" name="price" value={this.state.price} onChange={this.handleChange} />
                        </label>
                        <div>
                            <label htmlFor="in-stock">
                                <input type="radio" id="in-stock" name="stock" value="true" /> In Stock
                            </label>
                            <label htmlFor="out-of-stock">
                                <input type="radio" id="out-of-stock" name="stock" value="false" /> Out of Stock
                            </label>
                        </div>
                        <button type="button" onClick={this.handleSubmit}>Update Listing</button>
                    </form>
                </div>
                <div>
                    <button type="button">Delete Listing</button>
                </div>
            </div>
        )
    }
}
