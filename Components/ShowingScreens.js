import React from 'react';
import { Provider } from 'react-redux';
import {StyleSheet,View,Text,Image,TouchableOpacity} from 'react-native';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';

class ShowingScreens extends React.Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  constructor(props){
    super(props);
    this.state={

    }
  }

   render() { 
    return ( 
      <TouchableOpacity 
      style = {styles.MainContainer}  
      onPress={() => this.props.navigation.navigate('Swipe1', {name: 'Jane'})}>
      
        <Image source={require('../assets/Images/car.png')}  />
        <View style={{paddingTop:30,flexDirection:'row'}} >
            <Text style={{color: 'white', fontSize: 45,}}> Mon</Text>
            <Text style={{color: 'black', fontSize: 45,}}> TAXI</Text>
        </View>         
      
      </TouchableOpacity> 
    );
  }
}
 
const styles = StyleSheet.create({ 
  MainContainer: { 
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#FFEB3B', 
    marginTop: -50,
  },
  text:{
    backgroundColor: '#FFEB3B', 
    color:'#ef5678',
  }
});


export default ShowingScreens;