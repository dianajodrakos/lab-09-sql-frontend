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
            <Route path="/" exact render={(routerProps) => <Home {...routerProps} />} />
            <Route path="/books" exact render={(routerProps) => <Books {...routerProps} />} />
            <Route path="/books/:id" exact render={(routerProps) => <BookDetail {...routerProps} />} />
            <Route path="/create" exact render={(routerProps) => <CreateBook {...routerProps} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

