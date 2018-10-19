export default class Tournament{
    constructor(name, date){
        this.name = name;
        this.date = date;
        this.games = [];
        this.location = '';
        this.banner = '';
    };

    getName = () =>{
        return this.name;
    };
    getGames = () => {
        return this.games;
    };
    addGame = (game) => {
        this.getGames().push(game);
    }
}