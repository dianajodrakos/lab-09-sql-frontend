import React, { Component } from 'react'
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
            <div>
                {/* map out the list of books fetched from the API */}
                
            </div>
        )
    }
}
