import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground,
  } from "react-native";
  import { StatusBar } from "expo-status-bar";
  import React, { useState } from "react";
export default Login=({styles})=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
        return (
            <>
                <ImageBackground source={require('./images/blackBackground.jpg')} style={{width: '100%', height: '100%'}}>
    
    <SafeAreaView style={styles.container}>
           <Text style={{fontSize:20, flex:.2, color:'white' ,  textDecorationLine:'line-through'}}>Welcome to the Login  </Text>
           <StatusBar style="auto" />
           <View style={styles.inputView}>
             <TextInput
               style={styles.TextInput}
               placeholder="Email."
               placeholderTextColor="#003f5c"
               onChangeText={(email) => setEmail(email)}
             /> 
           </View> 
           <View style={styles.inputView}>
             <TextInput
               style={styles.TextInput}
               placeholder="Password."
               placeholderTextColor="#003f5c"
               secureTextEntry={true}
               onChangeText={(password) => setPassword(password)}
             /> 
           </View> 
           <TouchableOpacity>
             <Text style={styles.forgot_button.forgot}>Forgot Password?</Text> 
           </TouchableOpacity> 
           <TouchableOpacity style={styles.loginBtn}>
             <Text style={styles.loginText}>Login</Text> 
           </TouchableOpacity>
           <TouchableOpacity>
             <Text style={styles.forgot_button.createAnAccount}>Create an Account</Text> 
           </TouchableOpacity> 
           
        
        </SafeAreaView>
    
      </ImageBackground>
            
            </>


        );
}