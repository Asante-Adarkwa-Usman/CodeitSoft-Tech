
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import ChatWithBot from './Screens/ChatWithBot';


const Stack = createStackNavigator();


export default class App extends Component{
	constructor(props){
		super(props);
	}

	render(){

	return(

         <NavigationContainer>

          <Stack.Navigator>

             <Stack.Screen  name= "Home" component={ Home } options={{ headerShown: false }} />

            <Stack.Screen name= "Feedback" component={ ChatWithBot }  options={{
            	headerShown: true ,
            	headerStyle: {backgroundColor:"#FECE21"}
             }} />

          </Stack.Navigator>

      </NavigationContainer>


		);
  }

}
