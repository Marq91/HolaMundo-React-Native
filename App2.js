// primera seccion react-native: sin fronteras

import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class Texto extends React.Component {
  state = {
    texto: 'Hola mundo',
  };

  handlePress = () => {
    this.setState({ texto: "adios mundo cruel"});
  }

  render() {
    //const texto = this.props.texto
    const { texto } = this.state;

    return <Text onPress={this.handlePress}>{texto}</Text>
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Otro texto</Text>
        <Text style={styles.text2}>Otro texto</Text>
        <Text style={styles.text3}>Otro texto</Text>
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
    justifyContent: 'space-between',
  },
});
