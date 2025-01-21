import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')}>
        <View style={styles.imageContainer}>
          <Image
            source={require('./assets/newyear.jpg')} // Путь к локальному изображению
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
    position: 'relative', // Для правильного позиционирования текста поверх изображения
    width: 400,
    height: 750,
  },
  image: {
    width: '107%',
    height: '107%',
    resizeMode: 'cover', // Чтобы картинка не искажалась
  },
  text: {
    position: 'absolute',
    top: '45%', // Позиционируем текст по вертикали
    left: '50%', // Позиционируем текст по горизонтали
    transform: [{ translateX: -140 }, { translateY: -70 }], // Центрируем текст
    color: 'white', // Цвет текста
    fontSize: 50, // Размер шрифта
    fontWeight: 'bold', // Жирный шрифт
    textShadowColor: '#000',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 4,
  },
  smallText: {
    position: 'absolute',
    top: '80%', // Позиционируем текст по вертикали
    left: '25%', // Позиционируем текст по горизонтали
    fontSize: 20,
    textShadowRadius: 4,
    textShadowOffset: { width: 3, height: 3},
    color: 'white',
    textShadowColor: '#000',
  },
});
