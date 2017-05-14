export default (state = [], action) =>{
    switch(action.type){
        case 'CREATE_BOOK':
            return [
                ...state,
                Object.assign({}, action.book)
            ];
        case "FETCH_PEOPLE_SUCCESS":
            return action.people;
        default:
            return state;
    }
}