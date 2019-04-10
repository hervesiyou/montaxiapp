import React from 'react';
import { Provider } from 'react-redux';
import {StyleSheet,View,Text,Image,TouchableHighlight} from 'react-native';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';

class ShowingScreens extends React.Component {

  constructor(props){
    super(props);
    this.state={

    }
  }

  _headerTopImage(bool){
    return (
      <View ><Image source={require('../assets/Images/top1.png')}/></View>
    )
  }
  _headerImage(bool){
    return (
     <View ><Image source={require('../assets/Images/car.png')}/></View>
    )
  }
  _middleImage(bool){
    return (
      <View ><Image source={require('../assets/Images/jumping.png')}/></View>
    )
  }
  _middleText(text){
    return (
      <View ><Text style={styles.yellow}>{text}</Text></View>
    )
  }
  _footerImage(bool){
    return (
      <View ><Image source={require('../assets/Images/jumping.png')}/></View>
    )
  }
  _footerText(text){
    return (
      <View ><Text style={styles.yellow}>{text}</Text></View>
    )
  }

  render() { 
    return ( 
      <TouchableHighlight onPress={this._onPressButton}>
      <View style = {styles.MainContainer}>
        <Image source={require('../assets/Images/car.png')}  />
        <View style={{paddingTop:30,flexDirection:'row'}} >
            <Text style={{color: 'white', fontSize: 45,}}> Mon</Text>
            <Text style={{color: 'black', fontSize: 45,}}> TAXI</Text>
        </View>         
      </View>
      </TouchableHighlight> 
    );
  }
}
 
const styles = StyleSheet.create({ 
  MainContainer: { 
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#FFEB3B', 
  },
  text:{
    backgroundColor: '#FFEB3B', 
    color:'#ef5678',
  }
});


export default ShowingScreens;