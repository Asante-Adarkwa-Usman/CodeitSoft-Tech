import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './app';
import {name as appName} from './app.json';
import GetStarted from './Screens/GetStarted';
import Home from './Screens/Home';
import ChatWithBot from './Screens/ChatWithBot';



class Main extends Component{
  constructor(props){

     super(props);

     this.state= {currentScreen: 'GetStarted'};
   }

      render(){
           const { currentScreen } = this.state;

              let mainScreen = currentScreen === 'GetStarted' ? <ChatWithBot/> : <App />
               return mainScreen
      }

      }



AppRegistry.registerComponent( appName, () => Main);
