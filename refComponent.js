import React, { Component } from 'react';
import { View,Text,Image } from 'react-native';

//组件的导出

// es6 方式
//export default 导出
//class 定义
export default class stateComponent extends Component{
    // 初始化方法一
    state={
        size: 20
    }
    
    getSize(){
        return this.state.size;
    }

    constructor(props){
        super(props);
        // 初始化方法二
        // this.state=({
        //     size: 80
        // });
    }

    render(){
        return <View>
                <Text style={{fontSize:20,backgroundColor:'red'}} 
                    onPress={()=>{this.setState({
                    size:  this.state.size+10
                    })}}>点击放大图片</Text>
                <Text style={{fontSize:20,backgroundColor:'red'}} 
                onPress={()=>{this.setState({
                size:  this.state.size-10
                })}}>点击缩小图片</Text>
                <Image style={{width: this.state.size,height: this.state.size}} source={require('./img01.png')}/>
            </View>
    }
}
