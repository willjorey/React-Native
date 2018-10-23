import { db } from './database';
import Organization from '../components/Organization';
import Game from '../components/Game';

// Database structure:
// Organizations obj:
                // {banner: 'url to picture',
                // name: 'Name of organization',
                // subscriptions: 'Number of subs',
                // Tournaments:{ 
                //     Tournament key: {
                //         date: 'starting date of tournament',
                //         name: 'Name of tournament'
                //     }}
                // }
// Tournaments obj:
            // {Tournament key: {
            //     (Date of Game) Key:{
            //         Game Key:{
            //             aName: 'away team name',
            //             hName: 'home team name',
            //             aScore: 'away team score',
            //             hScore: 'home team score',
            //             time : 'Time of the game',
            //         }
            //     }
            // }}






export const getOrgs = (that) => {
    db.ref('/v1/Organizations').on("value", function(snapshot) {
        let list = [];
        let obj = snapshot.val();

        for (let key in obj){
            let temp = obj[key];
            let org = new Organization(key,temp.name);
            org.setTournaments(temp.Tournaments);
            org.setBanner(temp.banner);
            list.push(org);
        }
        that.setState({
            orgs:list
        });
        that.list = list;
    });
};


export const getTournamentGamesBy_Key = (that,key) =>{
    db.ref('/v1/Tournaments/' + key ).on("value", function(snapshot) {
        let obj = snapshot.val();
        that.tournament.setGames(obj);

        //Grab todays date games
        let temp;
        for (let key in obj){
            if (key === that.todayStr){
                temp = obj[key];
            }else{
                temp = false
            }
        };

        if (typeof temp === 'object'){
            let list = [];
            for (let key in temp){
                let game = temp[key];
                let g = new Game(game.hName, game.aName, game.time);
                list.push(g);
            };
            that.setState({
                games: list
            })
        }
    });

}

export const getOrgsByKey = (that, keys) => {
    let temp = [];
    //for each organization key in keys, create an Organization obj and add to a list to be shown.
    for (let i = 0; i < keys.length; i++){
        db.ref('/v1/Organizations/' + keys[i]).on("value", function(snapshot) {
            let obj = snapshot.val();
            let org = new Organization(keys[i], obj.name);
            org.setTournaments(obj.Tournaments);
            org.setBanner(obj.banner);
            temp.push(org);
        });
    }
    that.setState({
        subs: temp,
    })
    console.log(temp)
};