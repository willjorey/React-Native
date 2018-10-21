import { combineReducers } from 'redux';
 
import { SET_LOGIN, LOGIN, LOGOUT, SET_PROFILE, LOGOUT_PROFILE } from "../actions/" //Import the actions types constant we defined in our actions


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

let profileState = {profile: {}};
const profileReducer = (state = profileState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            state = {...profileState, profile: action.profile};
            return state;
        case LOGOUT_PROFILE:
            state = {...profileState.profile};
        default:
            return state;
    }
}

// Combine all the reducers
const rootReducer = combineReducers({
    // dataReducer,
    loginReducer,
    profileReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})
 
export default rootReducer;