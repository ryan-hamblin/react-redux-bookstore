// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import people from './peopleReducers';

 export default combineReducers({
     people: people,
 });

