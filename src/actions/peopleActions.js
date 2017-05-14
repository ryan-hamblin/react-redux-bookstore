import Axios from 'axios';
const apiUrl = 'http://swapi.co/api/people/';

export const fetchPeopleSuccess = (people) =>{
    return {
        type: 'FETCH_PEOPLE_SUCCESS',
        people
    }
};

export const fetchPeople = ()=>{
    return (dispatch)=>{
        return Axios.get(apiUrl)
            .then(res =>{
                dispatch(fetchPeopleSuccess(res.data.results));
            })
            .catch(error=>{
                throw(error);
            })
    }
}

export const createBook = (book) =>{
    return {
        type: "CREATE_BOOK",
        book: book
    }
}