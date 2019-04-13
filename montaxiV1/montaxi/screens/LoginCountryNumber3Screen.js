import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
import LoginCountryNumber from '../components/LoginCountryNumber';

export default class LoginCountryNumber3Screen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
       <LoginCountryNumber navigation={this.props.navigation}  />
    );
  }
}