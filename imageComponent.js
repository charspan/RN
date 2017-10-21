import React, { Component } from 'react';
import { Text,View,Image } from 'react-native';

// resizeMode  的 repeat 只有在 ios 上有效

// <Image style={{width: 50,height: 50,borderWidth:1,tintColor:'red'}} 
// source={require('ic_test')}/>
export default class imageComponent extends Component{
    render(){
        return <View>
            <Image style={{width: 40,height: 50,borderWidth:1}} 
                    resizeMode={'center'} 
                    source={require('./img01.png')}/>
            <Image style={{width: 50,height: 50,borderWidth:1}}
                     resizeMode={'center'}
                     source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505990492783&di=e3012a5fed687f200b824863e1f413fa&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201508%2F06%2F20150806104002_ZkysL.png'}}/>
            <Image style={{width: 50,height: 50,borderWidth:1}} source={{uri:'test'}} />
           
        </View>
    }
}
