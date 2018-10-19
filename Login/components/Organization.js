export default class Organization{
    constructor(name){
        this.name = name;
        this.tournaments = [];
        this.num_subs = 0;
        this.color = '#1E90FF';
        this.banner= '';
    }

    getName = () => {
        return this.name;
    };
    getSubCount = () => {
        return this.num_subs;
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
 
}