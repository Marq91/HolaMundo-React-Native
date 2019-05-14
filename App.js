import React from 'react';
import { View, Alert, Button, StyleSheet, Text } from 'react-native';
import { Location, Permissions } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default class App extends React.Component {
  state = {
    location: { coords: {} },
    errorMessage: null
  };

  getLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    // Alert.alert("Permisos", status)
    if (status !== "granted" ) {
      return this.setState({ errorMessage: "Permisos no aceptados" });
    }

    const location = await Location.getCurrentPositionAsync();
    console.log("location", location);
    // Alert.alert('Mensaje Locacion!', location );
    this.setState({ location });
  };
  render() {
    console.log("location: ", toString(location));
    return (
      <View style={styles.container}>
      <Text>
        {this.state.location.coords.latitude}{" "}
        {this.state.location.coords.longitude}
      </Text>
        <Button onPress={this.getLocation} title="Solicitar posición" />
      </View>
    );
  }
}