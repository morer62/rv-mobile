import React, { useState } from 'react'
import { TouchableOpacity, View, AsyncStorage } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Button, Text } from 'react-native-paper' 
import authStyles from '../../styles/auth'
 


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLoginPressed = () => {
     
     
    navigation.reset({
      routes: [{ name: 'forgotPassword' }],
    })
  }

  return (
    <View style={authStyles.container}> 
        <Text style={{marginTop:8}}>E-Mail </Text>
        <TextInput
          style={authStyles.input}
          label="email"
          placeholder="E-Mail"
          returnKeyType="done"
          value={email.value}
          onChangeText={(text) => setEmail(text)} 
        />

        <Text style={{marginTop:8}}>Password </Text>
        <TextInput
          style={authStyles.input}
          label="Password"
          placeholder="Password"
          returnKeyType="done"
          value={password.value} 
          onChangeText={(text) => setPassword(text)} 
        />


        <View style={authStyles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate('forgotPassword')}
          >
            <Text style={authStyles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <Button mode="contained" onPress={onLoginPressed}>
          Login
        </Button>
        <View style={authStyles.row}>
          <Text>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace('Signup')}>
            <Text style={authStyles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
 