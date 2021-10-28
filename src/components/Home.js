import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';  
import styles from '../styles/style'
 

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
        <Image 
            style={{height:150,  width:350 }}
            source={require('../../public/assets/LogoRV_old.png')}
        />
        <Text style={styles.title}>ADVOCACY. COMMUNITY. EDUCATION. RESOURCES. REWARDS</Text>
        <Button
          title="Log in"
          mode="contained" 
          onPress={() => navigation.navigate('login')}
        />
         <View style={{width: 1, height: 2, backgroundColor: '#000', margin:10}} ></View>
        <Button
          title="Create account"
          mode="contained" 
          style={{ margin:40 }}
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    );
  }