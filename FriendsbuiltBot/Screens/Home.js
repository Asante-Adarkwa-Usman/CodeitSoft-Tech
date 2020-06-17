import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Linking,
  View,Image,Keyboard,
  Dimensions,TouchableHighlight,Text,
  StatusBar,TouchableWithoutFeedback,
  KeyboardAvoidingView, Alert,ActivityIndicator
} from 'react-native';

import Button  from 'react-native-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Avatar, Card, Title, Paragraph, Provider as PaperProvider  } from 'react-native-paper';


export default class Home extends Component {
  constructor(props){
    super(props);
  }
  render(){

    return(
      <ScrollView>

        <View style={{ flex: 1}}>
        <Image
         style={{ marginVertical: 50,marginHorizontal: 100,justifyContent: 'center', alignItems: 'center', alignContent: 'center', width: wp('40'), height: hp('35')}}
         source={require('../Constants/Assets/Images/yellowLogo.jpg')}
        ></Image>
         <Text
         style={{color: '#FECE21', fontSize: 20, fontWeight: 'bold', marginHorizontal: 100}}
         > FriendsBuilt Inc</Text>

        </View>
      <PaperProvider>

                <Card>

          <Card.Content>
           <Title>Our Services</Title>
           <Paragraph>Get to see what we do at FriendsBuilt</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
          <View  style={{backgroundColor: '#FECE21',  borderRadius: 30, fontWeight: 'bold', color: 'white' }}>
           <Button
             style={{fontSize: 15, color: '#382D07', padding: 5}}
            onPress={()=> Linking.openURL('http://google.com')}
           >Check it out</Button>
           </View>
          </Card.Actions>
          </Card>

          <Card>

              <Card.Content>
               <Title>Sample Projects</Title>
               <Paragraph>See projects built by the FriendsBuilt team</Paragraph>
              </Card.Content>
              <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
              <Card.Actions>
              <View  style={{backgroundColor: '#FECE21',  borderRadius: 30, fontWeight: 'bold',  }}>
               <Button
                style={{fontSize: 15, color: '#382D07', padding: 5}}
                onPress={()=> Linking.openURL('http://google.com')}
               >Check it out</Button>
               </View>
              </Card.Actions>
    </Card>

    <Card>

        <Card.Content>
         <Title>Price Plan</Title>
         <Paragraph>Get to build awesome applications with Less Cost</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
        <View  style={{backgroundColor: '#FECE21',  borderRadius: 30, fontWeight: 'bold' }}>
         <Button
         style={{fontSize: 15, color: '#382D07', padding: 5}}
          onPress={()=> Linking.openURL('http://google.com')}
         >Check it out</Button>
         </View>
        </Card.Actions>
</Card>



       </PaperProvider>
    </ScrollView>


    );
  }
}


const styles = StyleSheet.create({



 });
