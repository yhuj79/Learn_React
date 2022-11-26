/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Button, Alert, View, SafeAreaView, Platform} from 'react-native';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';

//default는 App.js에서만 사용해야 하는 듯
export class Home extends Component {
  /**
   * 바코드 스캔
   */
  scanBarcode = () => {
    var that = this;
    //To Start Scanning
    async function requestCameraPermission() {
      try {
        const granted = await request(PERMISSIONS.IOS.Camera);
        if (granted === RESULTS.GRANTED) {
          //If CAMERA Permission is granted

          //TODO BarcodeScanner.js를 호출하세요
          //this가 아니라 that을 사용해야 함
          that.props.navigation.navigate('BarcodeScanner', {
            onGetBarcode: that.onGetBarcode,
          });
        } else {
          alert('카메라 권한을 받지 못했습니다.');
        }
      } catch (err) {
        alert('카메라 권한 오류: ', err);
        console.warn(err);
      }
    }
    //Calling the camera permission function
    requestCameraPermission();
  };

  onGetBarcode = barcodeValue => {
    console.log('barcode value: ', barcodeValue);
    //아래 함수의 파라미터로 문자열만 넘길 수 있음. barcodeValue가 문자열처럼 보이지만 문자열이 아닌 듯. String()는 작동하지 않음. JSON.stringify()는 작동함
    Alert.alert('barcode value: ', barcodeValue);
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <SafeAreaView
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Button title="바코드 스캔" onPress={() => this.scanBarcode()} />
        </SafeAreaView>
      </View>
    );
  }
}
