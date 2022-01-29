import { StyleSheet, View, TextInput } from 'react-native';
import React, { useState, useRef } from 'react';
import { ApplicationProvider, Text, Button, Divider, List, ListItem } from '@ui-kitten/components';
import PhoneInput from "react-native-phone-number-input";

const data = new Array(1).fill({
  name: 'Lyuba',
});

const DashboardScreen = () => {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(PhoneInput);

  const renderItemAccessory = (props) => (
    <Button style={styles.accessoryStyle} size='tiny'>Compliment</Button>
  );

  const renderItem = ({ item, index }) => (
    <ListItem title={`${item.name}`} 
    accessoryRight={renderItemAccessory}/>
  );

  

  return (
    <View style={styles.body}>
      <View style={styles.content}>
        <View>
          <Text style={styles.titleStyle} category='h3'>Friends</Text>
          
        </View>
      
        <View>
          <Divider/>
          
          <View style={styles.friendBox} >
            <List
              style={styles.container}
              data={data}
              ItemSeparatorComponent={Divider}
              renderItem={renderItem}
            />
          </View>

          <Text style={styles.textStyle} category='s1'>Add Friend</Text>
          <TextInput style={styles.nameInput} placeholder="Name"></TextInput>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="CA"
            onChangeFormattedText={(text) => {
              setValue(text);
            }}
            withLightTheme
            withShadow
            autoFocus
          />
        </View>
        <Button style={styles.buttonStyle}><Text style={styles.text}>Add Friend</Text></Button>
        <View>
        </View>
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#D5C5E8",
    flex: 1,
  },
  titleStyle: {
    paddingTop: 10,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  textStyle: {
    paddingTop: 50,
    fontWeight: 'bold',
    marginVertical: 10,
    marginBottom: 10,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  buttonStyle: {
    marginTop: 20,
    borderColor: "#8785A2",
    backgroundColor: "#8785A2",
  },
  accessoryStyle: {
    borderColor: "#8785A2",
    backgroundColor: "#8785A2",
  },
  text: {
    color: 'black',
  },
  nameInput: {
    shadowColor: "#000",
    shadowOpacity: 0.12,
    backgroundColor: '#F8F9F9',
    marginBottom: 15,
    padding: 17,
  },
  friendBox: {
    borderColor: 'white',
    borderWidth: 3,
    marginTop: 50,
    padding: 2,
  },
  container: {
    maxHeight: 200,
  },
});
