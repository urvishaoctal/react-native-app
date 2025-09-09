
import React from 'react';
import { View, Text,StatusBar, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="pink" />
      <Text style={styles.title}>Home Screen
        
      </Text>
      <Button
        title="Go to Layout"
        onPress={() => navigation.navigate('')}
      />
      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color:"darkblue",
  },

});

