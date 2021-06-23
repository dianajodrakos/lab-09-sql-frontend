import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header.js';
import Home from './Home.js';
import Books from './Books.js';
import BookDetail from './BookDetail.js';
import CreateBook from './CreateBook.js';
import './App.css';


export default class App extends Component {
  render() {

    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/books" component={Books} />
            <Route path="/books/:id" component={BookDetail} />
            <Route path="/create" component={CreateBook} />
          </Switch>
        </Router>
      </div>
    );
  }
}

