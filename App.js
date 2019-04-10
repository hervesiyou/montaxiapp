import React from 'react'; 
import {StyleSheet,View,Image,Text} from 'react-native';
import Navigations from './Navigations/Navigations';
  

export default class App extends React.Component {
 
  constructor(props){
    super(props);
    this.state={  }     
  }
 
  render() { 
    return (
      <Navigations/>
    )
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
