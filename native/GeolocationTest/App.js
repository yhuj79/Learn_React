import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const App: () => Node = () => {
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
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  return (
    <SafeAreaView>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Location</Text>
        {location && (
          <>
            <Text style={styles.text}>X : {location.longitude}</Text>
            <Text style={styles.text}>Y : {location.latitude}</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
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
