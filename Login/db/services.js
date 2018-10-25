import { db, URL } from './database';
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

export const postGame = (key, game) => {
    let date = game.getDate();
    let away = game.getAwayName();
    let home = game.getHomeName();
    let t = game.getTime();
    db.ref('/v1/Tournaments/' + key + '/' + date).push({aName: away, hName: home, time: t});
};



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

export const getOrgsByKey = (that, subs) => {
    let temp = [];
    //for each organization key in subs, create an Organization obj and add to a list to be shown.
    for (let i = 0; i < subs.length; i++){
        db.ref('/v1/Organizations/' + subs[i].getKey()).on("value", function(snapshot) {
            let obj = snapshot.val();
            let org = new Organization(subs[i].getKey(), obj.name);
            org.setTournaments(obj.Tournaments);
            org.setBanner(obj.banner);
            temp.push(org);
        });
    }
    that.setState({
        subs: temp,
    })
};

// RESFTFUL API
export const fetchOrgs = (that) =>{
    let str = '/v1/Organizations.json';
    fetch(URL + str).then((res) => res.json()).then((snapshot) => {
        let list = [];
        for (let key in snapshot){
            let temp = snapshot[key];
            let org = new Organization(key,temp.name);
            org.setTournaments(temp.Tournaments);
            org.setBanner(temp.banner);
            list.push(org);
        }
        temp = list;
        that.setState({
            orgs:list
        });
        that.list = list;
    });
};

export const fetchTournamentGamesBy_Date = (that, key, date) =>{
    
    // let str = '/v1/Tournaments/' + key + '.json?orderBy="$key"&equalTo=' + '"' + "Wed Oct 24 2018" + '"';
    let str = '/v1/Tournaments/' + key + "/" + date + '.json';
    let url = URL + str;
    fetch(url).then((res) => res.json()).then((snapshot) => {
        console.log(snapshot);
        //Grab todays date games     
        let list = [];   
        for (let key in snapshot){
            let game = snapshot[key];
            let g = new Game(game.hName, game.aName, game.time);
            list.push(g);
        };
        that.setState({
            games: list
        });
    });
};

export const fetchOrgsByKey = (that, subs) => {
    let temp = [];

    for ( let i = 0; i < subs.length ; i++){
        let str = '/v1/Organizations/' + subs[i].getKey() + '.json';
        let url = URL + str;
        fetch(url).then((res) => res.json()).then((snapshot) => {
            console.log(snapshot);
            let org = new Organization(subs[i].getKey(), snapshot.name);
            org.setTournaments(snapshot.Tournaments);
            org.setBanner(snapshot.banner);
            temp.push(org);
            that.setState({
                subs: temp,
            });
        });
    };
};