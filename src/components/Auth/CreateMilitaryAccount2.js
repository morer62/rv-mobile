import React, { useState } from 'react'
import { TouchableOpacity, View, Picker, ScrollView, Checkbox } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Button,  Text } from 'react-native-paper' 
import authStyles from '../../styles/auth'
 


export default function Signup({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [selectedValue, setSelectedValue] = useState("java");
  const [isSelected, setSelection] = useState(false);

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    
    
     
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  return (
    <ScrollView style={authStyles.container}> 
      <View style={{borderBottomColor:'#CDCDCD', borderBottomWidth:2}}>
        <Text style={authStyles.title}> Sign-Up: RV Advisor & RV Advisor Motorclub. </Text>
      </View>
        
        <Text style={{marginTop:8}}>Your Name: </Text>
        <TextInput
          style={authStyles.input}
          label="Password"
          placeholder="Your Name"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })} 
        />

        <Text style={{marginTop:8}}>Your Lastname: </Text>
        <TextInput
          style={authStyles.input}
          label="Password"
          placeholder="Your Lastname"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })} 
        />


        <Text style={{marginTop:8}}>Your Email: </Text>
        <TextInput
          style={authStyles.input}
          placeholder="Your E-mail"
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })} 
        />


        <Text style={{marginTop:8}}>Password: </Text>
        <TextInput
          style={authStyles.input}
          placeholder="Your Password"
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })} 
        />


        <Text style={{marginTop:8}}>Phone Number: </Text>
        <TextInput
          style={authStyles.input}
          placeholder="Your Phone Number"
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })} 
        />

      
        <Text style={authStyles.title}>Membership Details</Text>

        <Text style={{marginTop:8}}>Your Military ID #:</Text>
        <TextInput
          style={authStyles.input}
          placeholder="Your Military Id Number"
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })} 
        />


        <Text style={{marginTop:8}}>Are you a RV, Camper or Trailer Owner?:</Text>
        <Picker
             selectedValue={selectedValue}
             style={authStyles.input}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Choose an option ..." value="" />
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" /> 
         </Picker>


         <Text style={{marginTop:8}}>How do you hear about us:</Text>
        <Picker
             selectedValue={selectedValue}
             style={authStyles.input}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Choose an option ..." value="" />
              <Picker.Item label="TV" value="TV" />
              <Picker.Item label="Radio" value="Radio" /> 
              <Picker.Item label="Social Media" value="Social Media" /> 
              <Picker.Item label="Google" value="Google" /> 
              <Picker.Item label="Friends" value="Friends" /> 
              <Picker.Item label="Direct Mailer" value="Direct mailer" /> 
              <Picker.Item label="Magazine" value="Magazine" /> 
              <Picker.Item label="Email" value="Email" /> 
              <Picker.Item label="Newsletter" value="Newsletter" /> 
              <Picker.Item label="Other" value="Other" /> 
         </Picker>


        <View style={authStyles.checkboxContainer}>
             
            <Text style={authStyles.label}>I accept terms and conditions</Text>
         </View>


         <Button mode="contained"  >
          Continue 
        </Button>

        
         
         <View style={{marginBottom:100}}></View>
    </ScrollView>
  )
}
 