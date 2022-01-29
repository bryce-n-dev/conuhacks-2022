import { StyleSheet, View } from 'react-native';
import { ApplicationProvider, Text, Button, Divider, Input } from '@ui-kitten/components';
import React from 'react';

const InputScreen = () => {
  return (
    <View style ={styles.body}>
      <View style={styles.content}>
        <Text style={styles.titleStyle} category = 'h3'>Write your compliment!</Text>
        <Input 
        style={styles.input}
        multiline={true}
        textStyle={{ minHeight: 200 }}
        placeholder='Compliments go over here :p'
        />
        <Button
          title="Send"
          style={styles.sendButton}
          onPress={() => Alert.alert('Simple Button pressed')}
        ><Text style={styles.text}>SEND</Text></Button>
      </View>
    </View>
  );
};

export default InputScreen;

const styles = StyleSheet.create({
  body:{
    backgroundColor: "#FBE7C5",
    flex: 1,
  },
  input: {
    shadowColor: "#000",
    shadowOpacity: 0.12,
    backgroundColor: 'white',
    marginBottom: 15,
    padding: 17,
    borderColor: 'white',
    borderWidth: 1,
  },
  titleStyle: {
    paddingTop: 10,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  sendButton: {
    borderColor:"#FCC7D9",
    backgroundColor: "#FCC7D9",
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30
  },
  recordButton: {
    borderColor:"#FFC7C7",
    backgroundColor: "#FFC7C7",
    marginTop: 50,
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 10,
    flex: 1,
    alignItems: 'center',
  },
});
