import React from 'react';
import { Provider } from 'react-redux';
import {StyleSheet,View,Image,Text} from 'react-native';


export const showOne = ()=> {
    return(
        <View style = {styles.ContainerOne}>           
        <Image source={require('../assets/Images/car.png')}  />
        <View style={{paddingTop:30,flexDirection:'row'}} >
            <Text style={{color: 'white', fontSize: 45,}}> Mon</Text>
            <Text style={{color: 'black', fontSize: 45,}}> TAXI</Text>
        </View> 
        </View> 
    );
}
export const showTwo = ()=>{
    return(
        <View style = {styles.ContainerTwo}>           
        <Image source={require('../assets/Images/autostop.png')}  />
        <View style={{paddingTop:30,flexDirection:'row'}} >
            <Text style={{color: 'white', fontSize: 45,}}> Mon</Text>
            <Text style={{color: 'black', fontSize: 45,}}> TAXI</Text>
        </View> 
        </View> 
    );
}
export const showThree= ()=>{
    return(
        <View style = {styles.ContainerThree}>           
        <Image source={require('../assets/Images/manstop.png')}  />
        <View style={{paddingTop:30,flexDirection:'row'}} >
            <Text style={{color: 'white', fontSize: 45,}}> Mon</Text>
            <Text style={{color: 'black', fontSize: 45,}}> TAXI</Text>
        </View> 
        </View> 
    );
}
export const showFour = ()=>{
    return(
        <View style = {styles.ContainerFourth}>           
        <Image source={require('../assets/Images/jumping.png')}  />
        <View style={{paddingTop:30,flexDirection:'row'}} >
            <Text style={{color: 'white', fontSize: 45,}}> Mon</Text>
            <Text style={{color: 'black', fontSize: 45,}}> TAXI</Text>
        </View> 
        </View> 
    );
}
 

const styles=StyleSheet.create({
	 
 ContainerOne: { 
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#FFEB3B', 
  },
  ContainerTwo: { 
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#FFF', 
  },
})