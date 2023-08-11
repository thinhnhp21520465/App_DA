import React from 'react';
import {useState} from 'react';
import {View, Button, StyleSheet, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const App = () => {
  const [imageSource, setImageSource] = useState('');

  const handleButtonPress = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };
    console.log(imageSource);
    launchImageLibrary(options, response => {
      setImageSource(response.assets[0].uri);
      console.log(response.assets[0].uri + ' respond');
    });
  };

  return (
    <View style={styles.container}>
      {/* Nội dung màn hình */}
      <View style={styles.imageContainer}>
        <Image source={{uri: imageSource}} style={styles.image} />
      </View>
      {/* Nút bấm */}
      <View style={styles.buttonContainer}>
        <Button
          title="Bấm để load ảnh muốn dự đoán"
          onPress={() => {
            handleButtonPress();
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Nút 2" onPress={() => console.log('Nút 2 được nhấn')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 16,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  imageContainer: {
    padding: 20,
    width: 400,
    height: 400,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width : '100%',
    height: 350,
  }
});

export default App;
