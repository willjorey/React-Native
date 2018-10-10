import { combineReducers } from 'redux';
 
import { DATA_AVAILABLE, GET_LOGIN } from "../actions/" //Import the actions types constant we defined in our actions
 
let dataState = { data: [], loading:true };
 
const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            state = Object.assign({}, state, { data: action.data, loading:false });
            return state;
        default:
            return state;
    }
};

let loginState = {username: '', password: ''};
const loginReducer = (state = loginState, action) => {
    switch (action.type) {
        case GET_LOGIN:
            state = Object.assign({}, state, {username: action.username, password: action.password})
            return state;
        default:
            return state;
    }
}
 
// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer,
    loginReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})
 
export default rootReducer;