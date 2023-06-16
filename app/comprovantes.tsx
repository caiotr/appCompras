import { Link } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import React = require("react");
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>0%</Text>
      0 de 100 bytes trasferidos


      <Button
        title="Fazer Upload"/>


      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems:"center",
    justifyContent:'center',
  },
  Text:{
  fontSize:40,

  }
});
