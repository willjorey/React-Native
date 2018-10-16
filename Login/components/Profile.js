export default class Profile{
    constructor(name,email, username,password){
        this.name = name;
        this.email = email;
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