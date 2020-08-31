import * as actionTypes from '../store/actions';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            const { personData: { name, age } } = action;
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: name,
                age: age
            }
            let newPersons = state.persons.concat(newPerson); 
            
            return {
                persons: newPersons
            }
        case actionTypes.DELETE_PERSON:
             newPersons = state.persons.filter(person => person.id !== action.id); 
            
            return {
                persons: newPersons
            }    
    }

    return state;
};

export default reducer;