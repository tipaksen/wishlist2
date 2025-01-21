import React, { createContext, useState } from 'react';
import {View,TextInput,StyleSheet,Text,TouchableOpacity,Alert,} from 'react-native';
import * as ImagePicker from 'expo-image-picker'; 
import Icon from 'react-native-vector-icons/FontAwesome';

// Создаём контекст
export const UserContext = createContext();

// UserProvider для предоставления контекста
export const UserProvider = ({ children }) => {
  const [link, setLink] = useState('');
  const [name, setName] = useState('');
  const [descr, setDescr] = useState('');
  const [price, setPrice] = useState('');

  return (
    <UserContext.Provider
      value={{link,setLink,
        name,setName,
        descr,setDescr,
        price,setPrice,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default function AddWish({ navigation }) {
  const { link, setLink, name, setName, descr, setDescr, price, setPrice } =
    React.useContext(UserContext);

  const [imageUri, setImageUri] = useState(null); 
  const [loading, setLoading] = useState(false); 

  // Обработка результата выбора или снимка изображения
  const handleResponse = (response) => {
    setLoading(false);
    if (response.cancelled) {
      Alert.alert('User cancelled image picker');
    } else if (response.uri) {
      setImageUri(response.uri); // Сохраняем URI выбранного изображения
    } else {
      Alert.alert('Error selecting image');
    }
  };

  // Выбор изображения из галереи
const selectImage = async () => {
  setLoading(true);
  try {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaType.IMAGE, 
      quality: 1,
    });
    handleResponse(result);
  } catch (error) {
    setLoading(false);
    Alert.alert('Error: ' + error.message);
  }
};

// Снимок с камеры
const takePhoto = async () => {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  if (status !== 'granted') {
    Alert.alert('Sorry, we need camera permissions to make this work!');
    return;
  }

  setLoading(true);
  try {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaType.IMAGE, 
      quality: 1,
      aspect: [4, 3],
    });
    handleResponse(result);
  } catch (error) {
    setLoading(false);
    Alert.alert('Error: ' + error.message);
  }
};

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={link}
        onChangeText={setLink}
        placeholder="Link"
      />
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput
        style={styles.textInput}
        value={descr}
        onChangeText={setDescr}
        placeholder="Description"
      />
      <TextInput
        style={styles.textInput}
        value={price}
        onChangeText={setPrice}
        placeholder="Price | tg"
        keyboardType="numeric"
      />


      <TouchableOpacity style={styles.cameraButton} onPress={selectImage}>
        <Icon name="image" size={25} color="white" />
        <Text style={styles.buttonText}>Select Image</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cameraButton} onPress={takePhoto}>
        <Icon name="camera" size={25} color="white" />
        <Text style={styles.buttonText}>Take Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate('DetailsScreen')}
      >
        <Text style={styles.submitButtonText}>Add Wish</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.exitButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.submitButtonText}>Exit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  textInput: {
    width: '100%',
    height: 50,
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  cameraButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: '60%',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
  },
  submitButton: {
    width: '50%',
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  exitButton: {
    width: '50%',
    height: 50,
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
