import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Button, Text } from 'react-native-paper' 
import authStyles from '../../styles/auth'
 


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
     
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  return (
    <View style={authStyles.container}> 
        <Text style={authStyles.title}>Enter your registered E-Mail</Text>
        <TextInput
          style={authStyles.input}
          label="Password"
          returnKeyType="done"
          value={password.value}
          placeholder="Your E-mail"
          onChangeText={(text) => setPassword({ value: text, error: '' })} 
        />

      
 
            <Button mode="contained" onPress={onLoginPressed}>
            Submit
            </Button>
             
         
    </View>
  )
}
 