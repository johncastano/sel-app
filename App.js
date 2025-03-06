// App.js
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [greeting, setGreeting] = React.useState('Hello World!');

  const changeGreeting = () => {
    if (greeting === 'Hello World!') {
      setGreeting('Welcome to Expo!');
    } else {
      setGreeting('Hello World!');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Logo Section */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.logo}
      />

      {/* Greeting Text */}
      <Text style={styles.title}>{greeting}</Text>

      {/* Interactive Button */}
      <TouchableOpacity 
        style={styles.button}
        onPress={changeGreeting}
      >
        <Text style={styles.buttonText}>Toggle Greeting</Text>
      </TouchableOpacity>

      {/* Info Card */}
      <View style={styles.card}>
        <Text style={styles.cardText}>
          Edit App.js to start developing your app!
        </Text>
      </View>
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    width: '80%',
  },
  cardText: {
    textAlign: 'center',
    color: '#333',
  },
});