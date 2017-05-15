import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import People from './components/common/People';
import Person from './components/common/Person';
import HomePage from './components/common/HomePage';
import AboutPage from './components/common/AboutPage';

export default (

    <Route path='/' component={App}>
        <IndexRoute component={HomePage}></IndexRoute>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/people" component={People}></Route>
        <Route path="/person/:id" component={Person}></Route>
    </Route>
)