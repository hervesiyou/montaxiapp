import React from 'react';
import { createAppContainer,createStackNavigator, createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import OtherScreen from '../screens/OtherScreen';
import SignInScreen from '../screens/SignInScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import LoginFNLN1Screen from '../screens/LoginFNLN1Screen';
import LoginPwdCpwd2Screen from '../screens/LoginPwdCpwd2Screen';
import LoginCountryNumber3Screen from '../screens/LoginCountryNumber3Screen';

import MainTabNavigator from './MainTabNavigator';
const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });
const LogStack = createStackNavigator({ 
      LoginFNLN1: LoginFNLN1Screen ,
      LoginCountryNumber :LoginCountryNumber3Screen
});

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  
        Main: MainTabNavigator,
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
        LoginFNLN1: LogStack,
        LoginPwdCpwd2:LoginPwdCpwd2Screen 
    },
    {
      initialRouteName: 'LoginFNLN1',
    }
));
 