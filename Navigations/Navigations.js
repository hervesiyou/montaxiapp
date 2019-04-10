import {createStackNavigator, createAppContainer} from 'react-navigation';
import ShowingScreens from '../Components/ShowingScreens';

import Swipe1 from '../Components/Swipes/Swipe1';
import Swipe2 from '../Components/Swipes/Swipe2';
import Swipe3 from '../Components/Swipes/Swipe3';
import Swipe4 from '../Components/Swipes/Swipe4';
import LoginScreens from '../Components/LoginScreens';

const MainNavigator = createStackNavigator({
  Show: {screen: ShowingScreens ,navigationOptions:{header:null}},
  Swipe1: {screen: Swipe1  ,navigationOptions:{header:null}},
  Swipe2: {screen: Swipe2 ,navigationOptions:{header:null}},
  Swipe3: {screen: Swipe3 ,navigationOptions:{header:null}},
  Swipe4: {screen: Swipe4 ,navigationOptions:{header:null}},
  LoginScreens: {screen: LoginScreens},
});

export default createAppContainer(MainNavigator);
