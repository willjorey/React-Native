export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const GET_LOGIN = 'GET_LOGIN';
export const CHECK_LOGIN = 'CHECK_LOGIN';
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
        dispatch({type: GET_LOGIN, username: user, password: pass});
    };
};

export function checkLogin(){
    return (dispatch) => {
        dispatch({type: CHECK_LOGIN});
    };
};

export function setLogin(user, pass){
    return (dispatch) => {
        dispatch({type: GET_LOGIN, username: user, password: pass});
    };
}