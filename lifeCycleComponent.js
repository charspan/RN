import React, { Component } from 'react';
import { View,Text } from 'react-native';

export default class lifeCycleComponent extends Component{
    // 组件初始化时调用
    constructor(props){
        super(props);
        console.log('---constructor---');
        this.state={
            count: 0
        };
    }
    // 准备加载组件
    componentWillMount(){
        console.log('---componentWillMount---');
    }
    // 在组件第一次绘制之后，会调用 componentDidMount()，通知组件已经加载完成
    componentDidMount(){
        console.log('---componentDidMount---');
    }
    // 如果组件收到新的属性（props），就会调用 componentWillReceiveProps()
    componentWillReceiveProps(nextProps){
        console.log('---componentWillReceiveProps---');
    }
    // 当组件接收到新的属性和状态改变的话，都会触发调用 shouldComponentUpdate(...)
    shouldComponentUpdate(nextProps,nextState){
        console.log('---shouldComponentUpdate---');
        return true;
    }
    // 如果组件状态或者属性改变，并且上面的 shouldComponentUpdate(...) 返回为 true，就会开始准更新组件，并调用 componentWillUpdate()，
    componentWillUpdate(nextProps,nextState){
        console.log('---componentWillUpdate---');
    }
    // 调用了 render() 更新完成界面之后，会调用 componentDidUpdate() 来得到通知
    componentDidUpdate(nextProps,nextState){
        console.log('---componentDidUpdate---');
    }
    // 当组件要被从界面上移除的时候，就会调用 componentWillUnmount()
    componentWillUnmount(){
        console.log('---componentWillUnmount---');
    }
    render(){
        console.log('---render---');
        return  (
            <View>
                <Text style={{fontSize:20,backgroundColor:'red',marginTop:2}}
                    onPress={()=>{this.setState({count: this.state.count+1});}}>请点击(看调试控制台组件生命周期)</Text>
                <Text style={{fontSize:20,marginTop:2}}>点击了{this.state.count}次</Text>
            </View>
        );
    }
}