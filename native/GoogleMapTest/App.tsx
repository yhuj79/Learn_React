import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.container}
        minZoomLevel={17}
        region={{
          latitude: 0,
          longitude: 0,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{latitude: 0, longitude: 0}}
          title="현 위치"
          description="위치 정보 Marker 입니다."
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
