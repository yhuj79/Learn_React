import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import {Platform} from 'react-native';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

function App() {
  const [location, setLocation] = useState(undefined);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('always');
    }
  }, []);

  useEffect(() => {
    Geolocation.watchPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({
          latitude,
          longitude,
        });
        console.log('SetLocation');
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true},
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.div_location}>
        <Text style={styles.title}>Location</Text>
        {location && (
          <>
            <Text style={styles.text}>X : {location.longitude}</Text>
            <Text style={styles.text}>Y : {location.latitude}</Text>
          </>
        )}
      </View>
      <WebView source={{uri: 'https://yhuj79.github.io/Learn_React'}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  div_location: {
    backgroundColor: '#FFF',
    paddingTop: 70,
    paddingBottom: 70,
  },
  title: {
    fontWeight: '700',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30,
  },
  text: {
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default App;
