import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    constructor(props){
        super(props);

        this.state = { 

        }
    }
    submitBook(input){
        alert("Submitted");
    }

    render() {
        let titleInput;

        return (
            <div>
                <h3>Books</h3>        
                <ul>
                    {this.props.books.map((book,i)=>{
                        return <li key={i}> {book.title}</li>
                    })}
                </ul>
                <div>
                    <h3>Books form</h3>
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        
                        var input = {title: titleInput.value}

                        this.onSubmit(input);

                        e.target.reset();
                    }}>
                        <input type="text" name="title" ref={node=>{titleInput = node}}/>
                        <input type="submit"/>
                    </form>

                </div>
            </div>
        );
    }
}

Book.propTypes = {
    books: PropTypes.array.isRequired,
};

export default Book;