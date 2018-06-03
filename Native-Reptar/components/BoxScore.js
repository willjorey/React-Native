import React from 'react';
import { StyleSheet, View, Image, ScrollView} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { List, ListItem, Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';


export default class BoxScore extends React.Component{
    constructor(props){
        super(props);
        this.navigation = this.props.navigation;
        var width = 50;
        this.state ={
            header: ['Name','POS','MIN', 'PTS', 'REB', 'AST', 'STL', 'BLK', 'FGM','FGA', 'FG%', '3PM', '3PA', '3P%','FTM', 'FTA', 'FT%', 'OFF', 'DEF', 'TOV', 'PF','+/-'],
            widthArray: [70 ,width, width, width,width,width,width,width,width,width, width, width,width,width,width,width,width,width, width, width,width],
            stats: [],
        };
    };

    getGameStats = () =>{
        fetch("https://basketball-9e231.firebaseio.com/game_stats.json")
        .then(res => res.json())
        .then(parsedres => {
            const t_array = [];
            for (const key in parsedres){
                t_array.push({
                    key:key,
                    NAME: parsedres[key].NAME,
                    POS: parsedres[key].POS,
                    MIN: parsedres[key].MIN,
                    PTS: parsedres[key].PTS,
                    REB: parsedres[key].REB,
                    AST: parsedres[key].AST,
                    STL: parsedres[key].STL,
                    BLK: parsedres[key].BLK,
                    FGM: parsedres[key].FGM,
                    FGA: parsedres[key].FGA,
                    FG_PERC: parsedres[key].FG_PERC,
                    THREE_PM: parsedres[key].THREE_PM,
                    THREE_PA: parsedres[key].THREE_PA,
                    THREE_PERC: parsedres[key].THREE_PERC,
                    FTM: parsedres[key].FTM,
                    FTA: parsedres[key].FTA,
                    FT_PERC: parsedres[key].FT_PERC,
                    OFF: parsedres[key].OFF,
                    DEF: parsedres[key].DEF,
                    TOV: parsedres[key].TOV,
                    PF: parsedres[key].PF,
                    PLUS_MINUS: parsedres[key].PLUS_MINUS
                });
            };
            this.setState({
                stats: t_array
            });
            console.log(Object.values(this.state.stats[0]))
        });
    }
    componentDidMount(){
        this.getGameStats();
    };
    
    render(){
        return (
            <View>
                <ScrollView horizontal={true}>
                    <View>
                    <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                        <Row data={this.state.header} textStyle={styles.headerText} widthArr={this.state.widthArray}/>
                    </Table>
                    <ScrollView>
                    <Table borderStyle={{borderColor: '#C1C0B9'}}>                
                        {
                        this.state.stats.map( (row,index) => (
                            <Row
                            key={index}
                            data={Object.values(this.state.stats[index]).slice(1)}
                            widthArr={this.state.widthArray}
                            textStyle={styles.dataText}
                            />   
                        ))
                        }
                    </Table>
                    </ScrollView>
                    </View>
                </ScrollView>
            </View>
        );
    }

};

const styles = StyleSheet.create({
    item: {
        margin:5,
    },
    headerText:{
        margin:3,
        fontSize:15
    },
    dataText:{
        fontSize:15,
        textAlign:'center'
    }
  });


