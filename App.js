import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {Container } from 'native-base'
import Landing from './src/components/Landing/Landing';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabBarIcon = (focused, name) => {
  let iconImagePath;

  if(name === "Main"){
    iconImagePath = require("./src/assets/images/crown.png")
  }
  return (
    <Image
      source={iconImagePath}
      style={{ width : focused ? 30 : 20, height: focused ? 30 : 20}}
    />
  )
}


const MainScreen = () => {
  return (
    <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor: "white",
          activeTintColor: "black",
          inactiveTintColor: "black",
          style:{
            backgroundColor: "white"
          },
          labelPosition: "below-icon",
        }}
        screenOptions={({route})=>({
          tabBarLabel: route.name,
          tabBarIcon: ({focused})=>(
            TabBarIcon(focused, route.name)
          ),
        })}
      >
        <Tab.Screen name="Main" component={Landing}/>
      </Tab.Navigator>
  )
}




const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Main" 
            component={MainScreen}
            options={{
              headerTitle: "today clothes",
              // headerRight: () => (
              //   <RightHeader/>
              // ),
              // headerLeft: () => (
              //   <LeftHeader/>
              // ),
              headerStyle: {
                backgroundColor: "white"
              },
              headerTitleStyle: {
                fontWeight: "bold",
              }
            }}
          />
          {/* <Stack.Screen 
            name="Contract"
            component={ProjectContract}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};



export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
    },
})