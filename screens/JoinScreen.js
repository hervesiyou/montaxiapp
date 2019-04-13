import  React  from "react";
import { View, Text } from "react-native";
import styles  from "../styles/Joint";

export default class JoinScreen extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            Text = {},
            Image = {},
            Button = {},
            isloading: true
        }
    }

    render(){
        return (
            <View style={styles.container}> 

                <Text>New test</Text>
            </View>
        )
    }


}
