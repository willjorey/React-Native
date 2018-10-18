export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const SET_LOGIN = 'SET_LOGIN';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_PROFILE = 'SET_PROFILE';
export const LOGOUT_PROFILE = 'LOGOUT_PROFILE';
export const ADD_SUB = 'ADD_SUB';

//Import the sample data
// import Data from '../instructions.json';
 
// export function getData(){
//     return (dispatch) => {
 
//         //Make API Call
//         //For this example, I will be using the sample data in the json file
//         //delay the retrieval [Sample reasons only]
//         setTimeout(() => {
//             const data  = Data.instructions;
//             dispatch({type: DATA_AVAILABLE, data:data});
//         }, 2000);
 
//     };
// };

export function getLogin(){
    return (dispatch) => {
        let user = 'username';
        let pass = 'password';
        dispatch({type: SET_LOGIN, username: user, password: pass});
    };
};

export function Login(){
    return (dispatch) => {
        dispatch({type: LOGIN});
    };
};

export function setLogin(user, pass){
    return (dispatch) => {
        dispatch({type: SET_LOGIN, username: user, password: pass});
    };
};

export function logout(){
    return (dispatch) => {
        dispatch({type: LOGOUT});
        dispatch({type: LOGOUT_PROFILE})
    }
};

export function setProfile(pro){
    return (dispatch) => {
        dispatch({type: SET_PROFILE, profile: pro});
    };
};