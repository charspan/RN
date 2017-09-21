import React, { Component } from 'react';
import { Text,View,TouchableWithoutFeedback,StyleSheet,Alert,TouchableHighlight,TouchableOpacity,TouchableNativeFeedback } from 'react-native';

// 不支持 ios
// <TouchableNativeFeedback
// onPress={()=>{
//     this.setState({count: this.state.count + 1})
// }}
// background={TouchableNativeFeedback.SelectableBackground()}>
// <View>
//     <Text>TouchableNativeFeedback</Text>
// </View>
// </TouchableNativeFeedback>
// es6 方式
//export default 导出
//class 定义
export default class touchableComponent extends Component{
    constructor(props){
      super(props);
      this.state={
        // 点击次数
        count : 0,
        text : ''
      };
    }
    render(){
      return <View>
              <TouchableWithoutFeedback
                  onPress={()=> {
                      this.setState({count: this.state.count+1})
                  }}
                  onLongPress={()=> {
                    this.setState({countLong: this.state.countLong + 1})
                    Alert.alert(
                        '提示',
                        '确定要删除吗?',
                        [
                            {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                            {text: '确定', onPress: () => console.log('OK Pressed')},
                        ]
                    )
                }}
              >
                  <View style={styles.button}>
                      <Text style={styles.buttonText}>
                          我是TouchableWithoutFeedback,单击我
                      </Text>
                  </View>
              </TouchableWithoutFeedback>
              <Text style={styles.text}>您单击了:{this.state.count}次</Text>

              <TouchableWithoutFeedback
                  disabled={this.state.waiting}
                  onPress={()=> {
                      this.setState({text:'正在登录...',waiting:true})
                      setTimeout(()=>{
                          this.setState({text:'网络不流畅',waiting:false})
                      },2000);
                  }}
              >
              <View style={styles.button}>
                  <Text style={styles.buttonText}>
                     登录
                  </Text>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback
                  onPressIn={()=> {
                      this.setState({text:'触摸开始',startTime:new Date().getTime()})
                  }}
                  onPressOut={()=>{
                      this.setState({text:'触摸结束,持续时间:'+(new Date().getTime()-this.state.startTime)+'毫秒'})
                  }}
              >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        记录触摸时间
                    </Text>
                </View>
              </TouchableWithoutFeedback>

              <TouchableHighlight
                  style={styles.button}
                  activeOpacity={0.7}
                  underlayColor='green'
                  onHideUnderlay={()=>{
                      this.setState({text:'衬底被隐藏'})
                  }}
                  onShowUnderlay={()=>{
                      this.setState({text:'衬底显示'})
                  }}
                  onPress={()=>{
              
                  }}
              >
                  <View style={styles.button}>
                      <Text style={styles.buttonText}>
                          TouchableHighlight
                      </Text>
                  </View>
              </TouchableHighlight>

              <TouchableOpacity
                activeOpacity={0.3}
              >
                  <View style={styles.button}>
                      <Text style={styles.buttonText}>
                      TouchableOpacity
                      </Text>
                  </View>
              </TouchableOpacity>

              
              <Text style={styles.text}>{this.state.text}</Text>
            </View>
    }
}

const styles=StyleSheet.create({
  button: {
    borderWidth : 1,
    borderRadius:5
  },
  buttonText: {
    fontSize : 18
  },
  text : {
    fontSize : 20
  }
});
