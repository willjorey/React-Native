export default class Tournament{
    constructor(key, age, date, gender, name){
        this.key = key;
        this.age = age;
        this.date = date;
        this.gender = gender;
        this.name = name;
    }

    getKey = () =>{
        return this.key;
    }
    getName = () =>{
        return this.name;
    }
}