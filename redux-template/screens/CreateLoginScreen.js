'use strict';

import React, { Component } from 'react';
import {View,} from 'react-native';

import NewLogin from '../components/newLogin';

export default class CreateLoginScreen extends Component {

    static navigationOptions = {
        title: 'Create New Login',
      };

    render() {
        return (
            <View>
                <NewLogin nav = {this.props.navigation}/>
            </View>
        );
    }

};