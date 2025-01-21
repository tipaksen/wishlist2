import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/circle.png')} 
          style={styles.image}
        />
        <Text style={styles.text}> Xeniya</Text >
    <Text style={styles.text2}>Here will be your wishes!</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddWish')}
        >
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'space-between', 
  },
  imageContainer: {
    alignItems: 'center', 
    marginTop: 20, 
  },
  image: {
    width: 130,
    height: 130,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 30, 
  },
  button: {
    backgroundColor: '#1E90FF', 
    width: 140,
    height: 70, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  plus: {
    fontSize: 40, 
    color: '#fff', 
  },
  text2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    fontSize: 30,
    marginLeft: 30,
    color: 'grey',
  },
  text:{
    fontSize: 25,
    marginTop:5,
  }
});