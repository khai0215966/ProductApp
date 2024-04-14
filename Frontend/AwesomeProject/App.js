import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font' 
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './navigation/BottomTab';
import { Cart, Details, NewRivals } from './screens'

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontLoad] = useFonts({
    regular: require('D:/PTUDDNT/Frontend/AwesomeProject/assets/fonts/Poppins-Regular.ttf'),
    bold: require('D:/PTUDDNT/Frontend/AwesomeProject/assets/fonts/Poppins-Bold.ttf'),
    extraBold: require('D:/PTUDDNT/Frontend/AwesomeProject/assets/fonts/Poppins-ExtraBold.ttf'),
    light: require('D:/PTUDDNT/Frontend/AwesomeProject/assets/fonts/Poppins-Light.ttf'),
    medium: require('D:/PTUDDNT/Frontend/AwesomeProject/assets/fonts/Poppins-Medium.ttf'),
    semiBold: require('D:/PTUDDNT/Frontend/AwesomeProject/assets/fonts/Poppins-SemiBold.ttf'),
  })

  const rootView = useCallback(async() => {
    if(fontLoad){
      await SplashScreen.hideAsync();
    }
  }, [fontLoad])

if(!fontLoad){
  return null
}

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Bottom Tab"
          component={BottomTab}
          options={{headerShown: false}}    
        />
        <Stack.Screen 
          name="Cart"
          component={Cart}
          options={{headerShown: false}}    
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewRivals"
          component={NewRivals}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


