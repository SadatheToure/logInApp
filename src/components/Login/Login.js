import React, { Component } from 'react';
import {View, Image, StyleSheet, Text, keyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return (
      <keyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.container}>
            <View style={styles.LogoContainer}>
                <Image
                style={styles.logo}
                source={require('../../images/Logo.png')}
                />
                <Text style={styles.title}> An app made for communication! </Text>
            </View>
            <View style={styles.formContainer}>
                <LoginForm />
            </View>
        </View>
      </keyboardAvoidingView>
      );
     }
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  LogoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  formContainer: {

  },
  title: {
    color: '#FFF',
    marginTop:10,
    width: 140,
    textAlign: 'center',
    opacity: 0.9
  },
  logo: {
    width: 100,
    height:100
  }
});
