const ADMIN = 'ADMIN';
const USER = 'USER';

export default class Profile{
    constructor(name,email, username, password){
        this.role;
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.subscriptions = [];
    }

    getRole = () => {
        return this.role;
    }
    getEmail = () => {
        return this.email;
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

    getSubscriptions = () => {
        return this.subscriptions;
    }
    addSubscription = (sub) =>{
        this.getSubscriptions().push(sub);
    }

    copyObj = (obj) => {
        this.name = obj.name;
        this.email = obj.email;
        this.username = obj.username;
        this.password = obj.password;
        this.subscriptions = obj.subscriptions;
    };

    checkSubscription = (key) =>{
        for (let i = 0; i < this.getSubscriptions().length; i ++){
            if (key === this.getSubscriptions()[i].getKey())
                return true;
        }
        return false;
    }
 
}