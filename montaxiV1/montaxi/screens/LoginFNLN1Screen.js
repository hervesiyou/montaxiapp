import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
import LoginNameSurname from '../components/LoginNameSurname';

export default class LoginFNLN1Screen extends Component {
  static navigationOptions = {
    title: 'your Name and Surname',
  };
  render() {
    
    return (
       <LoginNameSurname navigation={this.props.navigation} />
    );
  }
}