import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React , {useState} from 'react';
import {View,Text,Button , StyleSheet , TouchableOpacity , TextInput, Alert, ScrollView , Image , Dimensions } from 'react-native';
import Feed from './Feed'
import Notifications from './Notifications';
import Profile from './Profile';
import Home from './Home';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    
    <Tab.Navigator
      initialRouteName="Home"
     screenOptions={{
      tabBarShowLabel:false
     }}
      
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
         headerShown: false,
          tabBarIcon: ({ color, size }) => (
           <Image source={require('../assets/Home.png')}   />
          ),
          tabBarStyle:{
            backgroundColor:'black'
          }
          
        }}
        
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
         // tabBarLabel: 'Updates',
         showLabel:false,
          tabBarIcon: ({ color, size }) => (
            <Image  source={require('../assets/Abc.png')}/>
          ),
          tabBarStyle:{
            backgroundColor:'black'
          }
       
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
        //  tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Image  source={require('../assets/Message.png')}/>
          ),
        }}
      />
       <Tab.Screen
   name="Feed"
   component={Feed}
   tabBarVisible={false}
   options={{
    // tabBarLabel: 'Profile',
     tabBarIcon: ({ color, size }) => (
        <Image  source={require('../assets/Profile.png')}/>
     ),
   }}
 />
    </Tab.Navigator>
  );
}

export default MyTabs