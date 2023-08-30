import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet
} from "react-native";
import Login from "./Login";
import Sign_up from "./Sign_up";
export default function App() {
  
  return (

<>
{/* <Login styles={styles}/> */}
<Sign_up/>

</>
   
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },    
  
  inputView: {
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    width: "70%",
    height: 45,
    marginBottom: 15,
    alignItems: "start",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    forgot:{
      height: 30,
      color:'#ab0000',
      textDecorationLine: 'underline'
    },
    createAnAccount:{
      height: 30,
      marginTop:20,
      color:'#99697e',
      textDecorationLine: 'underline'
    }

    // borderBottomStartRadius:29,
  },
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#345bd1",
  
  },
});