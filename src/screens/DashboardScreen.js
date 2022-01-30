import { StyleSheet, View, TextInput, Image } from 'react-native';
import React, { useState, useRef } from 'react';
import { ApplicationProvider, Text, Button, Divider, List, ListItem, Modal, Card } from '@ui-kitten/components';
import PhoneInput from "react-native-phone-number-input";

const DashboardScreen = () => {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(PhoneInput);


  const [visible, setVisible] = React.useState(false);

  return (
    <View style={styles.body}>
      <View style={styles.content}>
        <View>
          <Text style={styles.titleStyle} category='h3'>Friends</Text>
        </View>
      
        <View>
          <Divider/>
          <View style={styles.containerImage}>
          <Image source= {{ uri:"https://i.pinimg.com/originals/b6/dc/32/b6dc32652d284a4cc73454a6fa0884db.png" }} style={styles.styleImage}/>
          </View>
          <Text style={styles.textStyle} category='s1'>Compliment your friends</Text>
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
        <Button style={styles.buttonStyle}><Text style={styles.text}>Compliment</Text></Button>
        <View>
          <View>
              <Button style={styles.modalButton} onPress={() => setVisible(true)}>CLICK ME 🤩</Button>

      <Modal style={styles.modal} onPress={() => setVisible()}visible={visible} backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <Text>YOU SEXY BEAST! 😳</Text>
          <Button style={styles.modalButton} onPress={() => setVisible(false)}>
            CLOSE
          </Button>
        </Card>
      </Modal>
          </View>
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

  containerImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  styleImage: {
    marginTop: 20,
    width: 200,
    height: 200,
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

  modal:{
    marginTop: 60,
    
  },

  modalButton:{
    marginTop: 15,
    borderColor: "#FDCACE",
    backgroundColor: "#FDCACE",
  },

  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
