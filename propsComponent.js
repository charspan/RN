import React, { Component ,PropTypes} from 'react';
import { View,Text } from 'react-native';

// 通过this.props访问当前页面属性,这个页面属性是通过上一个页面传递过来的或者是通过本组件定义的默认属性
// 上个页面传递的属性是只读的,可以在本页设置默认属性
export default class propsComponent extends Component{
    // static defaultProps={
    //     name : '默认属性:小米',
    //     age : 12
    // };
    // static propTypes={
    //     name: PropTypes.string.isRequired,
    //     age: PropTypes.number
    // };

    constructor(props){
        super(props);
        this.state=({
            user: props.user,
            callback: props.callback
        })
    }

    render(){
       return (
            <View>
                <Text style={{fontSize:20,backgroundColor:'red'}}>user: {JSON.stringify(this.state.user)}</Text>
                <Text
                    onPress={()=>{
                        this.state.user.age=23;
                        this.setState({
                            user: this.state.user
                        });
                    }}
                >changeVaule</Text>
                <Text
                    onPress={()=>{
                        this.state.callback();
                    }}
                >showFatherInfo</Text>
            </View>
        );
    }
}
