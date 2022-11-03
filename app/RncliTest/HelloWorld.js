/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

function Logo(props) {
  let img =
    props.native === 'no'
      ? require('./assets/react.png')
      : require('./assets/reactnative.png');
  return (
    <View>
      <Image source={img} style={{width: 330, height: 200}} />
    </View>
  );
}

function HelloWorld() {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Hello World</Text>
      <Logo native="no" />
      <Logo native="yes" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hello: {
    color: 'blue',
  },
});

export default HelloWorld;
