
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,Image,Keyboard,
  Text,Dimensions,
  StatusBar,TouchableWithoutFeedback,
  TextInput,KeyboardAvoidingView, Alert,
} from 'react-native';

import ChatBot  from 'react-native-chatbot';

const steps = [
       {id: "1",
       message: 'Hi there, welcome to FriendsBuilt Inc.',
       trigger:"2"
     },
      {
      id: "2",
      message: ' I am an online chatbot trained to take your feedback',
      trigger: "3"
    },
    {
        id: "3",
        message: 'So, what is your name please ?',
        trigger: "4"
    },
    {
      id: "4",
      user: true,
      end: true,

    },




    ];
export default class ChatWithBot extends Component{
  render(){
    return(
      <View style={styles.container}>

       <ChatBot steps= { steps } />


      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
   flex:1,
   backgroundColor: '#e9e9ee',
 }




});
