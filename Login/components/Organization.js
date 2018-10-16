export default class Organization{
    constructor(name){
        this.name = name;
        this.tournaments = [];
        this.num_subs = 0;
        this.color = '#1E90FF';
    }

    getName = () => {
        return this.name;
    };
    getSubCount = () => {
        return this.num_subs;
    }
 
}