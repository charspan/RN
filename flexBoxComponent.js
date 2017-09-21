import React, { Component } from 'react';
import { Text,View } from 'react-native';

export default class helloComponent extends Component{
    render(){
        // flexDirection enum(‘row’, ‘column’,’row-reverse’,’column-reverse’)
        //http://www.devio.org/2016/08/01/Reac-Native%E5%B8%83%E5%B1%80%E8%AF%A6%E7%BB%86%E6%8C%87%E5%8D%97/
        return <View style={ {flexDirection:'row-reverse',backgroundColor:"darkgray",marginTop:0}}>
                <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>1</Text>
                </View>
                <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>2</Text>
                </View>
                <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>3</Text>
                </View>
                <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>4</Text>
                </View>
            </View>
    }
}
