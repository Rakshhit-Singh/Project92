import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default class App extends React.Component {
  render() {
    return(
      <View style={styles.container}>
          <Image 
          style={styles.background}
          source={require('../assets/bg.png')}/>

            <TouchableOpacity
              style={styles.guestButton}
              onPress={() => {
                this.props.navigation.navigate('Tab');
              }}>
              <Text style={styles.displayText}>CONTINUE AS GUEST</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {

              }}>
              <Text style={styles.displayText}>LOGIN</Text>
            </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  background:{
      height:'70%',
      borderRadius: 3000,

  },
  guestButton: {
    width: 300,
    height: 60,
    alignSelf: 'center',
    padding: 5,
    marginTop: '10%',
    borderRadius: 30,
    backgroundColor: '#673E0F',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  loginButton: {
    width: 300,
    height: 60,
    alignSelf: 'center',
    padding: 5,
    marginTop: '5%',
    borderRadius: 30,
    backgroundColor: '#673E0F',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  displayText: {
    fontSize: RFValue(20, 580),
    fontWeight:'bold',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});
