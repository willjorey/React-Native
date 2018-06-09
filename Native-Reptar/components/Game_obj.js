export default class Game{
    constructor(key, awayName, homeName, awayScore, homeScore, awayLogo, homeLogo, tid, time, homeTeamID,awayTeamID){
        this.key = key;
        this.awayName = awayName;
        this.homeName = homeName;
        this.awayScore = awayScore;
        this.homeScore = homeScore;
        this.awayLogo = awayLogo;
        this.homeLogo = homeLogo;
        this.tid = tid;
        this.time = time;
        this.homeTeamID = homeTeamID;
        this.awayTeamID = awayTeamID;
    }

    getHomeName = () => {
        return this.homeName;
    };
    getAwayName = () => {
        return this.awayName;
    };
    getHomeScore = () => {
        return this.homeScore;
    };
    getAwayScore = () => {
        return this.awayScore;
    };

}