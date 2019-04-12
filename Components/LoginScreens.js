import React, { Component } from 'react';
import {ActivityIndicator,View,StyleSheet} from 'react-native';
import {Constants,Expo} from 'expo';
import { Font } from 'expo';

import {
  Container,
  Header,
  Button,
  Text,
  Body,
  Form,
  Item as FormItem,
  Input,
  Label,
  Title,
} from 'native-base';

export default class LoginScreens extends Component {

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
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={[styles.container, styles.horizontal]}>         
          <ActivityIndicator size="small" color="#fff" />
        </View>
      )
    }
    return (
      <Container style={{ paddingTop: Constants.statusBarHeight }}>
        <Header style={{backgroundColor:'yellow'}}>
          <Body>
            <Title>Login!</Title>
          </Body>
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

          <Button full warning style={{ paddingBottom: 4 }}>
            <Text> Login </Text>
          </Button>
          <Button full light warning><Text> Inscription </Text></Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})