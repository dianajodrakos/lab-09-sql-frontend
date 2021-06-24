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
            author_id: book.author_id,
            image: book.image,
            description: book.description,
            pages: book.pages,
            year: book.year,
            language_id: book.language_id,
            publisher: book.publisher,
            isbn: book.isbn,
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


    render() {

        return (
            <div>
                UPDATE BOOK LISTING
                {/* map out a specific book based on params */}
            </div>
        )
    }
}
