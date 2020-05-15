import React, {useState} from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AppLoading } from 'expo'; 
import DrawerNavigator from './routes/drawer';

const getFonts = () => Font.loadAsync({
  'noteworthy-bold': require('./assets/fonts/Noteworthy-Bold.ttf'),
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'SourceSansPro-Bold': require('./assets/fonts/SourceSansPro-Bold.ttf'),
  'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  'SourceSansPro-Regular': require('./assets/fonts/SourceSansPro-Regular.ttf'),
  'SourceSansPro-Bold': require('./assets/fonts/SourceSansPro-Bold.ttf'),
  'SourceSansPro-BoldItalic': require('./assets/fonts/SourceSansPro-BoldItalic.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
    return (
      <DrawerNavigator />
    );
  } else {
      return (
        <AppLoading 
          startAsync={getFonts}
          onFinish={()=> setFontsLoaded(true)}
        />
      )
  }
  
}