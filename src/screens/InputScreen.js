import { StyleSheet, View, Alert } from 'react-native';
import { ApplicationProvider, Text, Button, Divider, Input } from '@ui-kitten/components';
import React, { useState } from 'react';

const InputScreen = ({ route, navigation }) => {
  const [compliment, setCompliment] = useState('');
  const phoneNumber = '+55555555';
  //const { phoneNumber } = route.params;

  const compliments = ['i love the way you code 🤩 ',
    'Keep working hard, you are shining! ✨',
    'When I look up the stars, I only see you 💫',
    'you\'re as cool as a cucumber 😎',
    'I appreciate and admire the person you are 🥰',
    'You look marvelous today! 😍',
    'you make me levitate 🕴',
    'Keep the good work your majesty 👑',
  ]

  const sendMessage = async () => {
    fetch('https://conuhacks2022-339715.ue.r.appspot.com/api/messages', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        To: phoneNumber,
        Body: compliment,
      })
    })
      .then(() => {
        setCompliment('');
        Alert.alert("Compliment sent!");
      })
      .catch(err => {
        console.log(err)
        Alert.alert("Error! Compliment not sent. Please try again later. :(")
      });
  }

  const generateCompliment = () => {
    setCompliment(compliments[Math.floor(Math.random() * compliments.length)])
  }

  return (
    <View style={styles.body}>
      <View style={styles.content}>
        <Text style={styles.titleStyle} category='h3'>Write your compliment!</Text>
        <Text style={styles.subtitle} category='h6'>we'll send your friend a fun photo with your message.</Text>
        <Input
          style={styles.input}
          multiline={true}
          textStyle={{ minHeight: 200 }}
          placeholder='say something nice :)'
          value={compliment}
          onChangeText={setCompliment}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Generate"
            style={styles.generateButton}
            onPress={generateCompliment}>
            <Text>GENERATE</Text>
          </Button>
          <Button
            title="Send"
            style={styles.sendButton}
            onPress={sendMessage}
          ><Text style={styles.text}>SEND</Text></Button>
        </View>
      </View>
    </View>
  );
};

export default InputScreen;

const styles = StyleSheet.create({
  body: {
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
    borderRadius: 15
  },
  titleStyle: {
    paddingTop: 10,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subtitle: {
    fontWeight: '200'
  },
  sendButton: {
    borderColor: "#d5c5e8",
    backgroundColor: "#d5c5e8",
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30
  },
  generateButton: {
    borderColor: "#FCC7D9",
    backgroundColor: "#FCC7D9",
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30
  },
  recordButton: {
    borderColor: "#FFC7C7",
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
  buttonContainer: {
    flexDirection: 'row'
  }
});
