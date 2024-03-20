import React from "react";
import{View,Text} from 'react-native'
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
  } from "react-native";
import { Alert } from "react-native-web";

const SignUpHandler=()=>{
if(!password){
Alert.alert('Password is not exist');
return;
}
fetch('http://localhost:3000/user/signup',{
 method:'POST',
 headers:{
   Accept:'application/json',
   'Content-Type':'application/jsson'
 },
 body:JSON.stringify({username,password,phoneNumber,Address,Email})
}).then 
  Alert.alert('registor succesfully'),navigation.navigate('Login')
}
function SignUp() {
      return (
        <SafeAreaView>
          <TextInput UserName style={styles.input} placeholder="Full Name" />
          <TextInput password style={styles.input} placeholder="password" secureTextEntry={true}  />
          <TextInput Email style={styles.input} placeholder="Email address"/>
          <TextInput phoneNumber style={styles.input} placeholder="phone number"/>
          <TextInput Address style={styles.input} placeholder="Address"/>
          
          <TouchableOpacity style={styles.button} onPress={ SignUpHandler}>
            <Text>Submit</Text>
          </TouchableOpacity><br/>
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      input: {
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width:200,
      },
      button: {
        margin: 12,
        borderWidth: 1,
        width:50
          },
    });
export default SignUp;
