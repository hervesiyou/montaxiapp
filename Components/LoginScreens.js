import React, { Component } from 'react';
import {Constants,Expo} from 'expo'
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
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container style={{ paddingTop: Constants.statusBarHeight }}>
        <Header>
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