import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
// 导入的组件名必须大写 // {默认导出以外的 类似上面的Component,Text 等}
import ImageComponent from './imageComponent'

import PropsComponent from './propsComponent'

export default class setup extends Component {
    constructor(props){
        super(props);
        this.state={
            user:{name:'name',age: 21}
        };
    }

    render() {
        return (
            <View style={styles.container}>
            <ImageComponent/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 15
  }
});
