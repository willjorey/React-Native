export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const CHECK_PASSWORD = 'CHECK_PASSWORD';

//Import the sample data
import Data from '../instructions.json';
 
export function getData(){
    return (dispatch) => {
 
        //Make API Call
        //For this example, I will be using the sample data in the json file
        //delay the retrieval [Sample reasons only]
        setTimeout(() => {
            const data  = Data.instructions;
            dispatch({type: DATA_AVAILABLE, data:data});
        }, 2000);
 
    };
};

export function getLogin(){
    return (dispatch) => {
        let user = 'username';
        let pass = 'password'
        dispatch({type: CHECK_PASSWORD, username: user, password: pass});
    }
}