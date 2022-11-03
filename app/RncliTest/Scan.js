/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button, Alert, View, SafeAreaView} from 'react-native';

//default는 App.js에서만 사용해야 하는 듯
export default function Scan() {
  /**
   * 바코드 스캔
   */
  function scanBarcode() {
    navigate('BarcodeScanner', {
      onGetBarcode: onGetBarcode,
    });
  }

  onGetBarcode = barcodeValue => {
    console.log('barcode value: ', barcodeValue);
    //아래 함수의 파라미터로 문자열만 넘길 수 있음. barcodeValue가 문자열처럼 보이지만 문자열이 아닌 듯. String()는 작동하지 않음. JSON.stringify()는 작동함
    Alert.alert('barcode value: ', barcodeValue);
  };

  return (
    <View style={{flex: 1}}>
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title="바코드 스캔" onPress={scanBarcode} />
      </SafeAreaView>
    </View>
  );
}
