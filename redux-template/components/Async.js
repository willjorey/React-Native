import {AsyncStorage } from 'react-native';
export default class Async{
    constructor(){

    }
    storeLogin = async (profile) => {
        let user = profile.getUsername();
        let pass = profile.getPassword();
        try {
          return await AsyncStorage.setItem(user + pass, JSON.stringify(profile));
        } catch (error) {
          // Error saving data
        }
    };
    getProfile = async () =>{
        try{
            let res = await AsyncStorage.getItem('Profile');
            return res;
        }catch(error){
            console.log(error.message);
        }
    };
    removeProfile = async () => {
        try {
          return await AsyncStorage.removeItem('Profile', JSON.stringify(profile));
        } catch (error) {
          // Error saving data
        }
    };

}