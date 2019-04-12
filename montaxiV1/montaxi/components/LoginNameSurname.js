import React from 'react';
import { Text } from 'react-native';

export class LoginNameSurname extends React.Component {
  render() {
    return (        
        <Container style={[this.props.style, { fontFamily: 'space-mono' }]} >
            <Header />
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