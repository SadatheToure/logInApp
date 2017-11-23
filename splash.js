import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class splash extends Component {
  render() {
    return (
        <View style={styles.wraper}>
          <View style={styles.titleWraper}>
            <Text style={styles.title}> WorldComm! </Text>
          </View>
          <View>
            <Text style={styles.subtitle}> Power by React Native </Text>
          </View>
        </View>
      );
     }
    }

const styles = StyleSheet.create({
  rapper: {
    backgroundColor: '#27ae60',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
},
title: {
  color: 'white',
  fontSize:35,
  fontWeight: 'bold'
},
subtitle: {
  color: 'white',
  fontWeight: '200',
  paddingBottom: 20
},
titleWraper: {
  justifyContent: 'center',
  flex: 1
}
});
