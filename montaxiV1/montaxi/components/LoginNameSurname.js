import React from 'react';
 
import {ActivityIndicator,View,Text,AsyncStorage} from 'react-native';
import { Container, Header,Left,Button,Icon,Right,Body,Title,Input,Image,Content,Form,Item as FormItem,Item,Label } from 'native-base';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
 

import {customStyle} from '../styles/loginStyles'

export  default class LoginNameSurname extends React.Component {
 
  constructor(props) {
    super(props);
    
    this.state = { 
      loading: true,
      navigation: this.props.navigation,
     };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      ProductSans: require("../assets/fonts/ProductSans.ttf"),
    });
    this.setState({ loading: false });
  }
  componentDidMount(){
     console.log(this.state.navigation);
  }
  _next =  () => {
    AsyncStorage.setItem('userToken', 'abc');
    this.state.navigation.navigate('LoginPwdCpwd2');
  };
  _back =  () => { 
    this.state.navigation.goBack();
  };
  
  render() {

    if (this.state.loading) {
      return (
        <View style={[customStyle.loading, customStyle.header]}>         
          <ActivityIndicator size="small" color="#fff" />
        </View>
      )
    }

    return (   
        
        <Container style={[this.props.style, { fontFamily: 'space-mono'  }]} >
            <Header span style={customStyle.header}>
              <Left>
                <Button transparent onPress={this._back()}>
                  <Icon name="arrow-back" />
                </Button>
              </Left>              
              <Body>              
                <Title style={customStyle.topTitle}>Let's set up your account</Title>
              </Body>
              <Right />
            </Header>
            
            <Form>
              <FormItem floatingLabel>
                <Label>Email</Label>
                <Input />
              </FormItem>
              <FormItem floatingLabel last>
                <Label>Mot de Passe</Label>
                <Input secureTextEntry={true} />
              </FormItem>                
              <Button light warning title="Next" onPress={this._next}><Text> Next </Text></Button>
            </Form>       
        </Container>
        
        
    )
  }
}

 