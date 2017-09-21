import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// 导入的组件名必须大写 // {默认导出以外的 类似上面的Component,Text 等}
import HelloComponent,{name,age,sum} from './helloComponent';
import LifeCycleComponent from './lifeCycleComponent';
import PropsComponent from './propsComponent';
import StateComponent from './stateComponent'
import RefComponent from './refComponent'

export default class setup extends Component {
    constructor(props){
        super(props);
        this.state=({
            remove: false,
            size: 0
        });
    }
    render() {
        var myView=this.state.remove?null:<LifeCycleComponent/>;
        var text=this.state.remove?"找回组件":"移除组件";
        // 通过 es6 延展操作符快捷赋值  <PropsComponent {...params} /> 
        var params={name: '名称',age: 18};
        // es6  结构赋值,获取结构中指定的属性
        var {name}=params;
        return (
            <View style={styles.container}>
                <HelloComponent name="小米"/>
                <Text style={{fontSize: 20,marginTop: 2}}>导出的name:{name},age:{age}</Text>
                <Text style={{fontSize: 20,marginTop: 2}}>使用导出方法sum:{sum(1,2)}</Text>
                <Text style={{fontSize: 20,marginTop: 2}} onPress={()=>{
                    this.setState({remove:!this.state.remove})
                }}>{text}</Text>
                {myView}
                <PropsComponent name="传过来的:name"/>
                <PropsComponent name='类型检查:{234}'/>
                <PropsComponent />
                <PropsComponent name={params.name} age={params.age}/>
                <PropsComponent {...params} />   
                <PropsComponent name={name} />  
                <StateComponent /> 
                <Text style={{fontSize:20,backgroundColor:'red'}} 
                      onPress={()=>{
                        // this.refs[size] 
                        // 获取组件实例调用方法
                        var size = this.refs.getSize();
                        this.setState({
                            size: size
                        });
                        // ref 是一个特殊的属性,所以可以像定义属性一样定义
                      }}>点击获取图片大大小(方法一):{this.state.size}</Text>
                <RefComponent ref='size'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 50
  }
});
