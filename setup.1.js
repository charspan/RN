import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// 导入的组件名必须大写 // {默认导出以外的 类似上面的Component,Text 等}

import RefComponent from './refComponent'
import Student from './Student'
import SpecialStudent from './SpecialStudent'
import FlexBoxComponent from './flexBoxComponent'
import TouchableComponent from './touchableComponent'
import ImageComponent from './imageComponent'

export default class setup extends Component {
    constructor(props){
        super(props);
        this.state=({
            remove: false,
            size: 0
        });
        this.stu=new Student('张三','男',12);
        this.specialStudent=new SpecialStudent();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize:20,backgroundColor:'red'}} 
                      onPress={()=>{
                        // this.refs[size] 
                        // 获取组件实例调用方法
                        var size = this.size.getSize();
                        this.setState({
                            size: size
                        });
                        // ref 是一个特殊的属性,所以可以像定义属性一样定义
                      }}>点击获取图片大大小(方法二):{this.state.size}</Text>
                <RefComponent ref={size=>this.size=size}/>
                <Text style={{fontSize:20,backgroundColor:'red'}}>{this.stu.getDescription()}</Text>
                <Text style={{fontSize:20,backgroundColor:'red'}}>{this.specialStudent.getDescription()}</Text>
                <FlexBoxComponent />
                <TouchableComponent />
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
