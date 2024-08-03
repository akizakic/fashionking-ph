import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export class Landing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/logo.png')} // 로고 이미지
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
          {/* 이곳에 필요한 콘텐츠 추가 */}
          <Image
            source={require('../../assets/images/weather_icon.png')} // 날씨 아이콘
            style={styles.weatherIcon}
          />
        </View>
      </View>
    );
  }
}

export default Landing;

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
  weatherIcon: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
});
