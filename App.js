import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, } from '@ui-kitten/components';

import DashboardScreen from './src/screens/DashboardScreen';
import InputScreen from './src/screens/InputScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Input">
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen name="Input" component={InputScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}
