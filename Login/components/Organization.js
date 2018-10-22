import Tournament from './Tournament';

export default class Organization{
    constructor(key,name){
        this.key = key;
        this.name = name;
        this.tournaments;
        this.num_subs = 0;
        this.color = '#1E90FF';
        this.banner= '';
    }

    getName = () => {
        return this.name;
    };
    setName = (name) => {
        this.name = name;
    };
    getSubCount = () => {
        return this.num_subs;
    };
    setTournaments = (tourn) => {
        this.tournaments = tourn;
    };
    getTournaments = () => {
        return this.tournaments;
    };
    addTournament = (tourn) => {
        this.getTournaments().push(tourn)
    };
    setBanner = (banner) => {
        this.banner = banner;
    };
    getBanner = () => {
        return this.banner;
    }
    setKey = (key) => {
        this.key = key;
    }
    getKey = () => {
        return this.key;
    };

    parseTournaments = () =>{
        let tour = this.getTournaments()
        let keys = Object.keys(tour);
        let temp = [];
        for (let i = 0; i < keys.length; i++){
            let obj = tour[keys[i]];
            let t = new Tournament(obj.name, obj.date);
            t.setGames(obj['games'])
            temp.push(t);
        };
        this.tournaments = temp;
    }
 
}