import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
//import console = require('console');

export default class App extends React.Component {
  // Definir state como un objeto vacio
  state = {};

  handlePress = () => {
    alert(`Tu nombre es: ${this.state.text}`);
  };

  handleChange = text => {
    this.setState({ text });
  };
  render() {
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <TextInput 
          onChangeText={this.handleChange}
          placeholder="Ingrese su nombre" 
        />
        <Button title="Aceptar" onPress={this.handlePress} />
        <Text>{text && `Mi nombre es: ${text}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
    color: "red"
  },
  text2: {
    height: 100,
    width: 100,
    backgroundColor: "yellow",
    color: "red"
  },
  text3: {
    height: 100,
    width: 100,
    backgroundColor: "orange",
    color: "red"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});