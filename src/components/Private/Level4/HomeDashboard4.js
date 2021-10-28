import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';  
import authStyles from '../../../styles/auth'
 

export default function HomeDashboard4({ navigation }) {
    return (
        <View style={authStyles.container}>
        <Image 
            style={{height:300, width:320, }}
            source={{
                uri: 'https://panel.thervadvisor.com/public/img/rvplans.jpg',
                }}
           
        />
        <Text style={authStyles.title}>Welcome User 4</Text>

 
      </View>
    );
  }