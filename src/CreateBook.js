import React, { Component } from 'react'
import { createBook, getAllAuthors, getAllCategories, getAllLanguages } from './fetch-utils.js';
export default class CreateBook extends Component {

    //set state
    state = {
        sku: 0,
        title: '',
        author_id: 1,
        image: '',
        description: '',
        pages: 0,
        year: 0,
        language_id: 1,
        publisher: '',
        isbn: '',
        category_id: 1,
        price: '',
        stock: false,
        authors: [],
        categories: [],
        languages: [],
    }

    componentDidMount = async () => {

        const authors = await getAllAuthors();
        const categories = await getAllCategories();
        const languages = await getAllLanguages();

        this.setState({
            authors: authors,
            categories: categories,
            languages: languages,
        })
    }

    //event handlers
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await createBook({
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

    
    render() {
        console.log(this.state);
        return (
            <div className="main">
                <div className="update">
                    <form>

                        {/* can you work on pre-loading the SKU to be the next in the database sequence? */}
                        <label>
                            SKU: 
                            <input type="text" name="sku" value={this.state.sku} onChange={this.handleChange} />
                        </label>

                        <label>
                            Title: 
                            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                        </label>

                        <label>
                            Author:
                            <select name="author_id" onChange={this.handleChange}>
                            {this.state.authors.map((author) => (
                                    <option value={author.id}>{author.author}</option>
                                    ))} 
                            </select>
                        </label>

                        <label>
                            Description: 
                            <textarea type="text" size="200" maxLength="512" name="description" value={this.state.description} onChange={this.handleChange} />
                        </label>

                        <label>
                            Category:
                            <select name="category_id" onChange={this.handleChange}>
                            {this.state.categories.map((category) => (
                                    <option value={category.id}>{category.category}</option>
                                    ))} 
                            </select>
                        </label>

                        <label>
                            Image Name (include extension): 
                            <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
                        </label>

                        <label>
                            Pages: 
                            <input type="text" name="pages" value={this.state.pages} onChange={this.handleChange} />
                        </label>

                        <label>
                            Year: 
                            <input type="text" name="year" value={this.state.year} onChange={this.handleChange} />
                        </label>

                        <label>
                            Publisher: 
                            <input type="text" name="publisher" value={this.state.publisher} onChange={this.handleChange} />
                        </label>

                        <label>
                            ISBN: 
                            <input type="text" name="isbn" value={this.state.isbn} onChange={this.handleChange} />
                        </label>

                        <label>
                            Language:
                            <select name="language_id" onChange={this.handleChange}>
                            {this.state.languages.map((language) => (
                                    <option value={language.id}>{language.language}</option>
                                    ))} 
                            </select>
                        </label>

                        <label>
                            Price: 
                            <input type="text" name="price" value={this.state.price} onChange={this.handleChange} />
                        </label>

                        <div>
                            <label htmlFor="in-stock">
                                <input type="radio" id="in-stock" name="stock" value="true" onChange={this.handleChange}/> In Stock
                            </label>
                            <label htmlFor="out-of-stock">
                                <input type="radio" id="out-of-stock" name="stock" value="false" onChange={this.handleChange}/> Out of Stock
                            </label>

                        </div>
                        <button type="button" onClick={this.handleSubmit}>Create Listing</button>
                    </form>
                </div>
            </div>
        )
    }
}
