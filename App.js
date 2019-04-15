import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Image } from 'react-native';
import { Asset, Font, Icon, SplashScreen } from 'expo';
import AppNavigator from './navigation/AppNavigator';
//import SplashScreen from "./screens/SplashScreen";

export default class App extends React.Component {
  state = {
    isReady: false,
    isLoadingComplete: false,
  };
  componentDidMount() {
    SplashScreen.preventAutoHide();
  }
  constructor(props){
    super(props);
    this.state = {
      isLoadingComplete: true
    }
  }

  /*async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
  
    if (data !== null) {
      this.setState({ isLoadingComplete: false });
    }
  }*/
  render() {
    /*if (this.state.isLoadingComplete ) {
      return (
        <SplashScreen
        />
       /* <AppLoading 
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        /> */
    /*  );*/
    if (!this.state.isReady) {
      return (
        
          <Image 
            source={require('./assets/images/splash.gif')}
            resizeMode= 'cover'
            onLoad={this._cacheResourcesAsync}
          />
      );
    
    } 
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    
  }
  _cacheSplashResourcesAsync = async () => {
    const gif = require('./assets/images/splash.gif');
    return Asset.fromModule(gif).downloadAsync()
  }
  _cacheResourcesAsync = async () => {
    SplashScreen.hide();
    const images = [
      require('./assets/images/icon.png'),
      require('./assets/images/robot-dev.png'),
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });

    await Promise.all(cacheImages);
    this.setState({ isReady: true });
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff301',
  },
  image: {
    backgroundColor: '#fff301'
  }
});
