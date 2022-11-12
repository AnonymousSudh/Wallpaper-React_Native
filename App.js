import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Home'
import ImageInfo from './src/ImageInfo';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{
          title: "Wallpaper",
          statusBarColor: "#151515",
          headerStyle: {
            backgroundColor: '#151515',          
          },
          headerTitleStyle:{
            color:"white"
          }
        }} />

        <Stack.Screen name="imageInfo" component={ImageInfo} options={{
          headerShown: false,
          statusBarColor: "#151515"
        }} />

      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({});

export default App;
