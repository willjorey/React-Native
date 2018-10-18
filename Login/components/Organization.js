export default class Organization{
    constructor(name){
        this.name = name;
        this.leagues=[];
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
    getLeagues = () => {
        return this.leagues;
    };
    addLeague = (league) => {
        this.getLeagues().push(league)
    };
    setBanner = (banner) => {
        this.banner = banner;
    };
    getBanner = () => {
        return this.banner;
    }
 
}