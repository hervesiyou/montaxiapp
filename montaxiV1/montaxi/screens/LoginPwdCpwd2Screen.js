import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
import LoginPwdCpwd from '../components/LoginPwdCpwd';

export default class LoginPwdCpwd2Screen extends Component {
  static navigationOptions = {
    title: 'your Password',
  };
  render() {
    return (
       <LoginPwdCpwd navigation={this.props.navigation}  />
    );
  }
}