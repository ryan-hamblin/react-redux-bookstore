import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as peopleActions from '../../actions/peopleActions';

class People extends Component {
    constructor(props){
        super(props);
    }

    createPeople(input){
        this.props.createPeople(input);
    }

    render() {
        let titleInput;

        return (
            <div>
                <h3>Star Wars Chars</h3>        
                <ul>
                   {this.props.people.map((p,i)=>{
                        return <li key={i}><Link to={"person/"+p.name}> {p.name} </Link></li>
                    })}
                </ul>
                <div>
                    <h3>People form</h3>
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        
                        var input = {title: titleInput.value}

                        this.createPeople(input);

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