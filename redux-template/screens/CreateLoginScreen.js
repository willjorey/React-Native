'use strict';

import React, { Component } from 'react';
import {View,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import NewLogin from '../components/newLogin';

class CreateLoginScreen extends Component {

    static navigationOptions = {
        title: 'Create New Login',
      };

    render() {
        return (
            <View>
                <NewLogin navigation = {this.props.navigation}/>
            </View>
        );
    }

};

export default createStackNavigator({
    CreateLogin: {
      screen: CreateLoginScreen
    },
  });