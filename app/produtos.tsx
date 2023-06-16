import { Link } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import React = require("react");
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>My shopping</Text>
      Monte sua lista de compra te ajuda nas compras
      <TextInput
        placeholder="Email"

      />
      <TextInput
        placeholder="Senha"

      />
      <Button
        title="Entrar"/>


      <Link href="./comprovantes">Esqueci a Senha</Link>
      <Link href="./upload">Criar minha conta</Link>

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
