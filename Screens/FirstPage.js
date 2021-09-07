import React, { useState, useEffect } from 'react' ;
import { View, StyleSheet, TouchableOpacity, TextInput, Alert,Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FirstPage({navigation}) {
    useEffect(() => {
        getData();
    })
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');

    const STORAGE_KEY = '@save_firstName'
    const STORAGE_KEY1 = '@save_latName'
    const STORAGE_KEY2 = '@save_birthDate'


    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('@storage_Key', firstName)
        } catch (e) {
            Alert.alert('Failed to store the data')
        }
      

        try {
          await AsyncStorage.setItem('@storage_Key1', lastName)
        } catch (e) {
            Alert.alert('Failed to store the data')
        }
     
        try {
          await AsyncStorage.setItem('@storage_Key2', birthDate)
        } catch (e) {
            Alert.alert('Failed to store the data')
        }
    }

      const getData = async () => {
        try {
          const FirstName = await AsyncStorage.getItem('@storage_Key')
          if(FirstName !== null) {
            setFirstName(FirstName)
          }
        } catch(e) {
            Alert.alert('Failed to fetch the data')
        }
      
        try {
          const LastName = await AsyncStorage.getItem('@storage_Key1')
          if(LastName !== null) {
            setLastName(LastName)
          }
        } catch(e) {
            Alert.alert('Failed to fetch the data')
        }
      
        try {
          const BirthDate = await AsyncStorage.getItem('@storage_Key2')
          if(BirthDate !== null) {
            setBirthDate(BirthDate)
          }
        } catch(e) {
            Alert.alert('Failed to fetch the data')
        }
      }
                  
      return (
        <>
            <View style={styles.container}>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder='First Name'
                        placeholderTextColor='#2F4F4F'
                        onChangeText={(text) => setFirstName(text)}
                        value={firstName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Last Name'
                        placeholderTextColor='#2F4F4F'
                        onChangeText={(text) => setLastName(text)}
                        value={lastName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Birthdate'
                        placeholderTextColor='#2F4F4F'                 
                        onChangeText={(text) => setBirthDate(text)}
                        value={birthDate}
                    />
                    
                    <TouchableOpacity style={styles.button} onPress={() => storeData()}>
                        <Text style={styles.text}>SAVE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyContacts')}>
                        <Text style={styles.text}>MY CONTACTS</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </>
        )
    
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#008080'            
        },
        input: {
            fontSize: 20,
            borderWidth: 2,
            borderColor: 'white',
            borderStyle: 'solid',
            borderRadius: 50,
            height: 55,
            paddingLeft: 30,
            margin: 15,
            color:'#E0FFFF',
        },
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10,
            marginBottom:18,
            paddingVertical: 18,
            borderRadius: 15,
            elevation: 1,
          },
          text: {
            fontSize: 20,
            fontStyle: "italic",
            lineHeight: 24,
            letterSpacing: 4.25,
            color: 'white',
          },
    })