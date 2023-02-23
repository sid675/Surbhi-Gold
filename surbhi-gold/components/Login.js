import * as React from 'react';
import { Text, View,TouchableOpacity, StyleSheet, Button ,Image } from 'react-native';


const MyButton = (props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default function Login(){
 return (
    <View style={styles.container}>
    <MyButton title="Login">   </MyButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
  },
});
