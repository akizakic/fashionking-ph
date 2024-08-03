// src/components/SignupScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, confirmPassword }),
      });

      const text = await response.text();
      console.log('Response:', text);

      try {
        const result = JSON.parse(text);
        if (response.ok) {
          await AsyncStorage.setItem('authToken', result.token);
          Alert.alert("회원가입 완료", "회원가입이 성공적으로 완료되었습니다!", [
            { text: "확인", onPress: () => navigation.navigate('Main') },
          ]);
        } else {
          Alert.alert("회원가입 실패", result.message || "알 수 없는 오류가 발생했습니다.");
        }
      } catch (e) {
        console.error('Error parsing JSON', e);
        console.error('Response was:', text);
        Alert.alert("회원가입 실패", "서버에서 유효한 응답을 받지 못했습니다.");
      }
    } catch (error) {
      console.error('Error during signup', error);
      Alert.alert("회원가입 실패", "네트워크 오류가 발생했습니다.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>
      <TextInput
        style={styles.input}
        placeholder="이메일"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호 확인"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="회원가입" onPress={handleSignup} />
      <Button
        title="로그인으로 돌아가기"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default SignupScreen;
