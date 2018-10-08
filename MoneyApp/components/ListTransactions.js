import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
    constructor(props){
        super(props);
        this.state ={
            list: [],
        };

    }

    componentWillReceiveProps(nextProps){
        let t = nextProps.transactions;
        this.setState({
            list: t,
        })
    }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.list}
          renderItem={({item} ) => <Text key={item.date} style={styles.item}>${item.total} {item.date}</Text>}
          keyExtractor={(item, index) => index + item.date}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})