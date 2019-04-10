import React from 'react';
import { Provider } from 'react-redux';
import {StyleSheet,View,Image,Text,TouchableOpacity} from 'react-native';


export default class Swipe1 extends React.Component {
    render(){
      return(
        <TouchableOpacity  style = {styles.ContainerOne} onPress={() => this.props.navigation.navigate('Swipe2', {name: 'Jane'})}>
                      
          <Image source={require('../../assets/Images/car.png')}  />
          <View style={{paddingTop:30,flexDirection:'row'}} >
              <Text style={{color: 'white', fontSize: 45,}}> Mon</Text>
              <Text style={{color: 'black', fontSize: 45,}}> TAXI</Text>
          </View> 
           
        </TouchableOpacity> 
      );
    }
}

const styles=StyleSheet.create({
	 
 ContainerOne: { 
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#FFEB3B', 
  }, 
})