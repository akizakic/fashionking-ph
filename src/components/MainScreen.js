// src/components/MainScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const MainScreen = ({ navigation }) => { # 어케?
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/weather_icon.png')}
          style={styles.logo}
        />
        <View>
          <Text style={styles.temperature}>32.8°</Text>
          <Text style={styles.city}>인천광역시 연수구</Text>
          <Text style={styles.updateTime}>업데이트 PM 2:11</Text>
        </View>
      </View>
      <Text style={styles.tip}>장마철로 인해 비가 많이 와요.</Text>
      <Text style={styles.tip}>신발이 다 젖을 수 있으니 천 신발은 피해 주세요.</Text>
      <View style={styles.content}>
        <Text style={styles.question}>오늘 이 옷은 어때요?</Text>
        <Image
          source={require('../assets/images/clothing.png')}
          style={styles.clothingImage}
        />
        <Button
          title="내 옷장"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 50,
  },
  temperature: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  city: {
    fontSize: 16,
    color: '#666',
  },
  updateTime: {
    fontSize: 12,
    color: '#999',
  },
  tip: {
    fontSize: 14,
    color: '#999',
    marginVertical: 4,
  },
  content: {
    marginTop: 20,
    alignItems: 'center',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  clothingImage: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
});

export default MainScreen;
