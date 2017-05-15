import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Person extends Component {
    render() {
        return (
            <div>
                <h1>THIS IS THE PERSON PAGE</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate saepe earum quis, est voluptates nulla doloremque recusandae, tenetur fugit, quas ad itaque eveniet dignissimos reprehenderit voluptatem maiores voluptatibus officia! Ducimus.</p>
            </div>
        );
    }
}

Person.propTypes = {

};

export default Person;