import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
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
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({
          latitude,
          longitude,
        });
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <View style={styles.container}>
          <Text style={styles.text}>Location</Text>
          {location && (
            <>
              <Text style={styles.text}>
                Longitude (X) : {location.longitude}
              </Text>
              <Text style={styles.text}>
                Latitude (Y) : {location.latitude}
              </Text>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingTop: 70,
    paddingBottom: 70,
  },
  text: {
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default App;
