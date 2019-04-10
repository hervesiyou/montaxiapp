import React from 'react';
import { Provider } from 'react-redux';
import {StyleSheet,View,Image,Text,TouchableOpacity} from 'react-native';


export default class Swipe2 extends React.Component {
    render(){
        return(
              
            <TouchableOpacity  style = {styles.ContainerTwo} onPress={() => this.props.navigation.navigate('Swipe3', {name: 'Jane'})}>
         
            <Image source={require('../../assets/Images/autostop.png')}  />
            <View style={{paddingTop:30,flexDirection:'row'}} >
                <Text style={{color: 'yellow', fontSize: 45,}}> Mon</Text>
                <Text style={{color: 'black', fontSize: 45,}}> TAXI</Text>
            </View> 
            </TouchableOpacity> 
        )
    }
}

const styles=StyleSheet.create({
	 
 
  ContainerTwo: { 
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#FFF', 
  },
})