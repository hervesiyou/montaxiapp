import {createStackNavigator, createAppContainer} from 'react-navigation';
import ShowingScreens from '../Components/ShowingScreens';
import LoginScreens from '../Components/LoginScreens';

const MainNavigator = createStackNavigator({
  Show: {screen: ShowingScreens ,navigationOptions:{title:'Bienvenue'}},
  Login: {screen: LoginScreens},
});

export default createAppContainer(MainNavigator);
