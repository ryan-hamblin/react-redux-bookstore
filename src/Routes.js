import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Book from './components/common/Book';
import HomePage from './components/common/HomePage';
import AboutPage from './components/common/AboutPage';

export default (

    <Route path='/' component={App}>
        <IndexRoute component={HomePage}></IndexRoute>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/books" component={Book}></Route>
    </Route>
)