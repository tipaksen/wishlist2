import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')}>
        <View style={styles.imageContainer}>
          <Image
            source={require('./assets/newyear.jpg')} 
            style={styles.image}
          />
          <Text style={styles.text}>Welcome to WishList!</Text>
          <Animatable.Text
            animation="pulse" // Анимация моргания
            iterationCount="infinite" // Бесконечная анимация
            style={styles.smallText}
          >
            Tap anywhere to open
          </Animatable.Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative', 
    width: 400,
    height: 750,
  },
  image: {
    width: '107%',
    height: '107%',
    resizeMode: 'cover', 
  },
  text: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', 
    color: 'white', 
    fontSize: 50, 
    fontWeight: 'bold', 
    textShadowColor: '#000',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 4,
  },
  smallText: {
    position: 'absolute',
    top: '80%', 
    left: '25%', 
    fontSize: 20,
    textShadowRadius: 4,
    textShadowOffset: { width: 3, height: 3},
    color: 'white',
    textShadowColor: '#000',
  },
});
