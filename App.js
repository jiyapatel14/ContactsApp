import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstPage from './Screens/FirstPage';
import MyContacts from './Screens/MyContacts'
import Profile from './Screens/Profile.js'
import CreateContact from './Screens/CreateContact'

const Stack = createStackNavigator();

export default function App() {
  return(
   <NavigationContainer>
     <Stack.Navigator initialRouteName='FirstPage'> 
     <Stack.Screen name='FirstPage' component={FirstPage} />
     <Stack.Screen name='MyContacts' component={MyContacts} />
     <Stack.Screen name='CreateContact' component={CreateContact} />
     <Stack.Screen name='Profile' component={Profile} 
      options={{
        headerShown: false,
      }}
     />
     </Stack.Navigator>
   </NavigationContainer>

  )
}