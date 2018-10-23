import {AsyncStorage } from 'react-native';
export default class Async{
    constructor(){

    }
    storeLogin = async (profile) => {
        let email = profile.getEmail();
        try {
          return await AsyncStorage.setItem(email, JSON.stringify(profile));
        } catch (error) {
          // Error saving data
        }
    };
    getLogin = async (key) =>{
        try{
            let res = await AsyncStorage.getItem(key);
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