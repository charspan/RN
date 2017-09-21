import React, { Component } from 'react';
import { Text } from 'react-native';

export default class helloComponent extends Component{
    render(){
        return <Text style={{fontSize:20,backgroundColor:'red'}}>hello.{this.props.name}</Text>
    }
}
