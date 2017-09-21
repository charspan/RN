import React, { Component } from 'react';
import { Text } from 'react-native';

//组件的导出

// es6 方式
//export default 导出
//class 定义
export default class helloComponent extends Component{
    render(){
        return <Text style={{fontSize:20,backgroundColor:'red'}}>hello.{this.props.name}</Text>
    }
}

// es5 方式
// var helloComponent=React.createClass({
//     render(){
//         return <Text style={{fontSize:20,backgroundColor:'red'}}>hello</Text>
//     }
// });
// module.exports=helloComponent;

// // 函数式
// //无状态,无法使用this
// //属性在方法参数里面
// function helloComponent(props){
//         return <Text style={{fontSize:20,backgroundColor:'red'}}>hello.{props.name}</Text>
// }
// module.exports=helloComponent;

// 变量的导出
export var id=1;
var name="小明";
const age=22;
export {name,age}

//导出方法
export function sum(a,b){
    return a+b;
}