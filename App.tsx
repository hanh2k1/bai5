 import React from 'react';
 import {Text, TextInput, View} from 'react-native';
 import {NavigationContainer} from '@react-navigation/native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import Network from './Bai6/Toprate';
 import NetworkDemo from './Bai6/Toppopular';
import { Image } from 'react-native';
 
 
 
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Top_Rate" component={Network}options={{
          tabBarIcon: () => (
            <Image
              source={require('./Bai6/icon2.png')}
               size={12}
            />
          ),
        }} />
        <Tab.Screen name="Top_Popular" component={NetworkDemo} options={{
          tabBarIcon: () => (
            <Image
              source={require('./Bai6/icon1.png')}
               size={12}
            />
          ),
        }}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;


 