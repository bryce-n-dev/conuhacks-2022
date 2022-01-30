import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const TestingScreen = () => {

  const sendMessage = async () => {
    fetch('https://conuhacks2022-339715.ue.r.appspot.com/api/messages', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        To: '+13065192242',
        Body: 'Hi!'
      })
    })
      .then()
      .catch(err => console.log(err));
  }

  return (
    <View>
      <Button
        title="Press me"
        onPress={sendMessage}
      />
    </View>
  );
};

export default TestingScreen;

const styles = StyleSheet.create({});
