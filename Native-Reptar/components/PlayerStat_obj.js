export default class PlayerStat{
    constructor(key, NAME,POS,MIN, PTS, REB, AST, STL, BLK, FGM,FGA, FG_PERC, THREE_PM, THREE_PA, THREE_PERC,FTM, FTA, FT_PERC, OFF, DEF, TOV, PF, PLUS_MINUS, TEAM_ID){
        this.key = key;
        this.NAME = NAME;
        this.POS = POS;
        this.MIN = MIN;
        this.PTS = PTS;
        this.REB = REB;
        this.AST = AST;
        this.STL = STL;
        this.BLK = BLK;
        this.FGM = FGM;
        this.FGA = FGA;
        this.FG_PERC = FG_PERC;
        this.THREE_PM = THREE_PM;
        this.THREE_PA = THREE_PA;
        this.THREE_PERC = THREE_PERC;
        this.FTM = FTM;
        this.FTA = FTA;
        this.FT_PERC = FT_PERC;
        this.OFF = OFF;
        this.DEF = DEF;
        this.TOV = TOV;
        this.PF = PF;
        this.PLUS_MINUS = PLUS_MINUS;
        this.TEAM_ID = TEAM_ID;
    }
}