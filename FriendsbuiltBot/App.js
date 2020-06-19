
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import ChatWithBot from './Screens/ChatWithBot';


const Stack = createStackNavigator();


export default class App extends Component{

	render(){

	return(

         <NavigationContainer>

          <Stack.Navigator>


            <Stack.Screen  name= "home" component={Home} options={{
            	headerShown: true ,
            	headerStyle: {backgroundColor:"#FECE21"}
             }} />
             <Stack.Screen  name= "chat with bot" component={ChatWithBot}
						   options={{
            	 headerShown: true,
            	 headerStyle: {backgroundColor:"#FECE21"}
             }} />

          </Stack.Navigator>

      </NavigationContainer>


		);
  }

}
