import { createStore } from 'redux';

const initialState = {
    value: 0,
    age: 23
};

// reducer 
const rootReducer = (state = initialState, action) => {
    console.log(action)
    // if(action.type == "INCREMENT")
    return state;
}

const store = createStore(rootReducer);