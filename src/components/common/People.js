import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as peopleActions from '../../actions/peopleActions';

class People extends Component {
    constructor(props){
        super(props);
    }

    submitPeople(input){
        this.props.createPeople(input);
    }

    render() {
        let titleInput;

        return (
            <div>
                <h3>Star Wars Chars</h3>        
                <ul>
                   {this.props.people.map((p,i)=>{
                        return <li key={i}> {p.name}</li>
                    })}
                </ul>
                <div>
                    <h3>People form</h3>
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        
                        var input = {title: titleInput.value}

                        this.submitPeople(input);

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

People.propTypes = {
    people: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) =>{
    return {
        people: state.people,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        createPeople: people => dispatch(peopleActions.createPeople(people)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(People);