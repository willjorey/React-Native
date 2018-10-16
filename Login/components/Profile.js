export default class Profile{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }

    getUsername = () => {
        return this.username;
    }
    getPassword = () => {
        return this.password;
    }

    setUsername = (value) => {
        this.username = value;
    }

    setPassword = (array) => {
        this.password = array;
    }

}