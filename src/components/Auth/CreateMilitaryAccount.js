import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';  
import authStyles from '../../styles/auth'
 

export default function CreateMilitaryAccount({ navigation }) {
    return (
        <View style={authStyles.container}>
        <Image 
            style={{height:300, width:320, }}
            source={{
                uri: 'https://panel.thervadvisor.com/public/img/rvplans.jpg',
                }}
           
        />
        <Text style={authStyles.title}>As military, you get exclusive offers in our system and enjoy a full privilege package on our platform.</Text>

        <Text style={{padding:10}}>* Unlimited Access to the RV Advisor website.</Text>
        <Text style={{padding:10}}>* Preferred pricing on all services in our store.</Text>
        <Text style={{padding:10}}>* Exclusive access to our partner discounts.</Text>
        <Text style={{padding:10}}>* Exclusive access to our Travel & Rewards Club and coupons on the go (SaveAround)</Text>
        <Button
          title="Continue"
          mode="contained" 
          onPress={() => navigation.navigate('createMilitaryAccount2')}
        />
         <View style={{width: 1, height: 2, backgroundColor: '#000', margin:10}} ></View>
        
      </View>
    );
  }