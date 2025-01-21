import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Изображение сверху */}
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/circle.png')} // Путь к локальному изображению
          style={styles.image}
        />
        <Text style={styles.text}> Xeniya</Text >
    <Text style={styles.text2}>Here will be your wishes!</Text>
      </View>

      {/* Кнопка внизу */}
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
    flex: 1, // Занимает весь экран
    justifyContent: 'space-between', // Распределяет элементы сверху и снизу
  },
  imageContainer: {
    alignItems: 'center', // Центрирует изображение по горизонтали
    marginTop: 20, // Отступ сверху
  },
  image: {
    width: 130,
    height: 130,
  },
  buttonContainer: {
    alignItems: 'center', // Центрирует кнопку по горизонтали
    marginBottom: 30, // Отступ от нижнего края
  },
  button: {
    backgroundColor: '#1E90FF', // Синий цвет кнопки
    width: 140, // Ширина кнопки
    height: 70, // Высота кнопки
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50, // Округление кнопки
    shadowColor: '#000', // Тень кнопки
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  plus: {
    fontSize: 40, // Размер плюса
    color: '#fff', // Белый цвет
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