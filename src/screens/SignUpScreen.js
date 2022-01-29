import { StyleSheet, Text, ScrollView, Image, TextInput,Alert,View} from 'react-native';
import React from 'react';
import {Button} from '@ui-kitten/components';

const SignUpScreen = () => {
  return (
    <ScrollView style = {{backgroundColor: '#FEF1EB'}}>
    <Image source= {{ uri:"https://i.pinimg.com/474x/1a/67/a6/1a67a6ce5f7e78b68cc1166993788b0e.jpg" }} style = 
    {{width:200, height:200, left:100, top:10, bottom: 30, padding : 100}}/>
    <View style = {{top:20}}>
    <Text style = {{left : 50, fontWeight: 'bold'}}>Username</Text>
    <TextInput style={{
      height: 40, 
      width: 300,
      left:50,
      borderColor: 'white',
      backgroundColor:'white',
      borderWidth: 1,
      marginBottom:20
    }}
      placeholder= "Enter Name Here"
      />
    <Text style = {{left : 50, fontWeight: 'bold'}}>Email</Text>
    <TextInput style={{
      height: 40, 
      width: 300,
      left:50,
      borderColor: 'white',
      backgroundColor:'white',
      borderWidth: 1,
      marginBottom:20
    }}
    placeholder='Enter Email Here'
    />
     <Text style = {{left : 50, fontWeight: 'bold'}}>Password</Text>
     <TextInput style={{
      height: 40, 
      width: 300,
      left:50,
      borderColor: 'white',
      backgroundColor:'white',
      borderWidth: 1,
      marginBottom:20
    }}
    placeholder='Enter Password Here'
    />
    <Text style = {{left : 50, fontWeight: 'bold'}}>Confirm Password</Text>
     <TextInput style={{
      height: 40, 
      width: 300,
      left:50,
      borderColor: 'white',
      backgroundColor:'white',
      borderWidth: 1,
      marginBottom:20
    }}
    placeholder='Re-Type Password Here'
    />
    </View>
    <Button style ={{ top: 30,width:200, left:100, backgroundColor:'#D5C5E8',borderWidth:0}} size='large' > Register </Button> 
     <Text style = {{top:50}}> Already have an account? </Text> 
    </ScrollView>

  );
};



export default SignUpScreen;

const styles = StyleSheet.create({});
