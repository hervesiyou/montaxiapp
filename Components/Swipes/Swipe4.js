import React from 'react';
import { Provider } from 'react-redux';
import {StyleSheet,View,Image,Text,TouchableOpacity} from 'react-native';


export default class Swipe4 extends React.Component {
    render(){
        return(
            
            <TouchableOpacity  
            style = {styles.ContainerFour} 
            onPress={() => this.props.navigation.navigate('LoginScreens', {name: 'Jane'})}>
          
            <Image source={require('../../assets/Images/jumping.png')}  />
            <View style={{paddingTop:30,flexDirection:'row'}} >
                <Text style={{color: 'yellow', fontSize: 45,}}> Mon</Text>
                <Text style={{color: 'black', fontSize: 45,}}> TAXI</Text>
            </View> 
            </TouchableOpacity> 
        )
    }
}

const styles=StyleSheet.create({
	 
 
  ContainerFour: { 
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#FFF', 
  },
})