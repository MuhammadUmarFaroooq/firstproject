import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function Sign_up() {
  
  function InputText({styles,placeholder,placeholderTextColor}){
   return(
   <>
    { password ? 
     <TextInput
     style={styles.TextInput}
     placeholder={placeholder}
     placeholderTextColor={placeholderTextColor}
     onChangeText={(First_Name) => setFname(First_Name)}
      />: <TextInput style={styles.TextInput} placeholder={placeholder} placeholderTextColor={placeholderTextColor} onChangeText={(First_Name) => setFname(First_Name)}
 
   /> 
    }
    
    </>)
  }
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

    
      <Text style={styles.text}>First_Name:</Text>
      <View style={styles.inputView}>

        <InputText styles={styles} placeholder={"First_Name"} placeholderTextColor={"#003f5c"} />
       
      </View> 
      <Text style={styles.text}>Last_Name:</Text>
      <View style={styles.inputView}>
      
        <InputText styles={styles} placeholder={"Last_Name"} placeholderTextColor={"#003f5c"} />
      </View> 
      <Text style={styles.text}>Email:</Text>
      <View style={styles.inputView}>
     
        <InputText styles={styles} placeholder={"email"} placeholderTextColor={"#003f5c"}/>
       
      </View>
      <Text style={styles.text}>Password:</Text> 
      <View style={styles.inputView}>
    
        <InputText styles={styles} placeholder={"password"} placeholderTextColor={"#003f5c"} />
       
      </View> 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Already exit account Login?</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text>Submit</Text> 
      </TouchableOpacity> 


 

      
    
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 10,
    marginTop:20,
    // borderBottomStartRadius:29,
  },
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#345bd1",
  
  },
 text:{
  marginLeft:12
 }
});