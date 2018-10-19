export default class Game{
    constructor(home, away, date){
        this.hscore = 0;
        this.ascore = 0;
        this.date = date;
        this.hname = home;
        this.aname = away;
    };

    getHomeName = () => {
        return this.hname;
    }
    getAwayName = () => {
        return this.aname;
    }
    getDate = () =>{
        return this.date;
    };
    getHomeScore = () => {
        return this.hscore;
    };
    getAwayScore = () => {
        return this.ascore;
    }
}