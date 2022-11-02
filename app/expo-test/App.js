import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput,
} from "react-native";
import uuid from "react-uuid";

export default function App() {
  const [value, setValue] = useState({
    key: "",
    value: "",
  });
  const [list, setList] = useState([]);

  function inputHandler(txt) {
    setValue({ value: txt });
  }
  function addHandler() {
    setValue({ key: uuid() });
    setList((param) => {
      return [...param, value];
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          value={value.value}
          onChangeText={inputHandler}
          style={styles.textInput}
          placeholder="Add List in Here"
        />
        <Button onPress={addHandler} title="ADD" />
      </View>
      <View style={styles.flatlist}>
      <FlatList
        data={list}
        renderItem={(data) => (
          <View style={styles.list} key={data.item.key}>
            <Text style={styles.item}>{data.item.value}</Text>
          </View>
        )}
      />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input:{
    marginVertical: 80,
    alignItems: "center",
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    width: 200,
    height: 30,
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  flatlist: {
    alignItems: "center",
  },
  list: {
    width: 300,
    backgroundColor: "lightblue",
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 7,
    borderRadius: 7,
  },
  item: {
    color: "darkblue",
  },
});
