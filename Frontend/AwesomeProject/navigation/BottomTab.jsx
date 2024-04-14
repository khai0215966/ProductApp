import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Search, Profile } from '../screens'
import { Ionicons } from '@expo/vector-icons'
import { COLOR} from '../constants/index'

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    elevation: 0,
    height: 70,
    width: '100%' 
  }
}

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen 
        name='Home' 
        component={Home}
        options={{
          tabBarIcon:({focus}) => {
            return <Ionicons 
              name={focus ? 'home' : 'home-outline'} 
              size={24}
              color={focus ? COLOR.primary : COLOR.gray2} 
            ></Ionicons>
          }
        }}
        />
      <Tab.Screen 
        name='Search'  
        component={Search}
        options={{
          tabBarIcon:({focus}) => {
            return <Ionicons 
              name={'search-sharp'} 
              size={24}
              color={focus ? COLOR.primary : COLOR.gray2} 
            ></Ionicons>
          }
        }}
        />
      <Tab.Screen 
        name='Profile' 
        component={Profile}
        options={{
          tabBarIcon:({focus}) => {
            return <Ionicons 
              name={focus ? 'person' : 'person-outline'} 
              size={24}
              color={focus ? COLOR.primary : COLOR.gray2} 
            ></Ionicons>
          }
        }}
        />
    </Tab.Navigator>
  )
}

export default BottomTab