export default class Profile{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }

    getusername = () => {
        return this.username;
    }
    getpassword = () => {
        return this.password;
    }

    setusername = (value) => {
        this.username = value;
    }

    setpassword = (array) => {
        this.password = array;
    }

}