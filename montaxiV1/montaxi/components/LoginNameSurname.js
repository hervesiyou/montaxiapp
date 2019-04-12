import React from 'react';
 
import {ActivityIndicator,View,Text} from 'react-native';
import { Container, Header,Left,Button,Icon,Right,Body,Title,Input,Image,Content,Form,Item } from 'native-base';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
 

import {customStyle} from '../styles/loginStyles'

export  default class LoginNameSurname extends React.Component {

  componentDidMount(){

  }
  constructor(props) {
    super(props);
    this.state = { loading: true };
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
  
  render() {

    if (this.state.loading) {
      return (
        <View style={[customStyle.loading, customStyle.header]}>         
          <ActivityIndicator size="small" color="#fff" />
        </View>
      )
    }

    return (        
        <Container style={[this.props.style, { fontFamily: 'space-mono',marginTop:20 }]} >
            <Header span style={customStyle.header}>
              <Left>
                <Button transparent>
                  <Icon name="arrow-back" />
                </Button>
              </Left>
              
              <Image style={customStyle.rectangle14} source={require('../assets/images/top.png')}></Image>
              <Body>
                <Title style={customStyle.topTitle}>Let's set up your account</Title>
              </Body>
              <Right />
            </Header>
            <Content>
            <Form>
                <Item>
                    <Input placeholder="FIRST NAME" />
                </Item>
                <Item last>
                 <Input placeholder="LAST NAME" />
                </Item>
            </Form>
            </Content>
        </Container>
    )
  }
}

 