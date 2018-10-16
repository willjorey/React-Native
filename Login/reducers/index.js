import { combineReducers } from 'redux';
 
import { DATA_AVAILABLE, SET_LOGIN, LOGIN, LOGOUT } from "../actions/" //Import the actions types constant we defined in our actions
 
// let dataState = { data: [], loading:true };
 
// const dataReducer = (state = dataState, action) => {
//     switch (action.type) {
//         case DATA_AVAILABLE:
//             state = Object.assign({}, state, { data: action.data, loading:false });
//             return state;
//         default:
//             return state;
//     }
// };

let loginState = {username: '', password: '', login: false};
const loginReducer = (state = loginState, action) => {
    switch (action.type) {
        case SET_LOGIN:
            state = {...state, username: action.username, password: action.password}
            return state;
        case LOGIN: 
            state = {...state, login: true};
            return state;
        case LOGOUT:
            state = {...loginState};
        default:
            return state;
    }
}
 
// Combine all the reducers
const rootReducer = combineReducers({
    // dataReducer,
    loginReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})
 
export default rootReducer;