import React from 'react';
import { Provider } from 'react-redux';
import {StyleSheet,View,Image,Text} from 'react-native';
import Navigations from './Navigations/Navigations';
import {showOne,showTwo,showThree,showFour} from './Components/Shows';
 
import { PersistGate } from 'redux-persist/es/integration/react';
import LoginScreens from './Components/LoginScreens';

import Expo from "expo";

export default class App extends React.Component {
 
  constructor(props){
    super(props);
    this.state={
      nextBoolOne:true,
      nextBoolTwo:false,
      nextBoolThree:false,
      nextBoolFour:false,
      nextBoolFive:false,
    }
      setTimeout( ()=>{this.setState({nextBoolTwo:true}),alert(this.state.nextBoolFour),this.forceUpdate() },4000);
      setTimeout( ()=>{this.setState({nextBoolThree:true}) , alert('Three') },8000);
      setTimeout( ()=>{this.setState({nextBoolFour:true})},12000);
      setTimeout( ()=>{this.setState({nextBoolFive:true})},16000);
  }


    async componentDidMount() {
        await Expo.Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });       
    }

  _rend(){
    
  }
  render() {

    if (this.state.nextBoolOne){
      //this.setState({nextBoolOne:false});
      return ( showOne() );
    }

    /** */
    if (this.state.nextBoolTwo){
      ///this.setState({nextBoolOne:false});
      alert('2');alert('Two')
      return ( showTwo() );
    }
    if (this.state.nextBoolThree){
     // this.setState({nextBoolThree:false});
      return ( showThree() );
    } 
    if (this.state.nextBoolFour){
      //this.setState({nextBoolFour:false});
      return ( showFour() );
    } 
    if (this.state.nextBoolFive){
      //this.setState({nextBoolFive:false});
      return ( <LoginScreens />);
    }
    /**/
    
  }
}
const styles=StyleSheet.create({
	maintext:{
	    color:"#fe8000",
	    flex:1,     
      backgroundColor:'#FFF301',
  },
  MainContainer: { 
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#FFEB3B', 
  },
})
