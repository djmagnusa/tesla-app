import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './components/CarItems'; //default file will index.js so we can leave blank


export default function App() {
  return (
    <View style={styles.container}>
    
      <CarItem 
         name={"Model X"} 
         tagline={"ORDER Online for"}
         taglineCTA={"Tochless Delivery"}
         image={require('./assets/images/Model3.jpeg')} 
      
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
