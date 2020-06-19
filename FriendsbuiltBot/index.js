import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import GetStarted from './Screens/GetStarted';
import Home from './Screens/Home';
import ChatWithBot from './Screens/ChatWithBot';
import {Surface, Shape} from '@react-native-community/art';



class Main extends Component{
  constructor(props){

     super(props);

     this.state= {
       currentScreen: 'GetStarted'
     };
   }

      render(){
           const { currentScreen } = this.state;

              let mainScreen = currentScreen === 'GetStarted' ? <GetStarted /> : <App />
               return mainScreen
      }

      }



AppRegistry.registerComponent( appName, () => Main);
