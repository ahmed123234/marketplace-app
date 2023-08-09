import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack' 
import { Home } from './Screens';
import Details from './Screens/Details';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();
export default function App() {
  // initialize the fonts that will be used during the entire application 
  // all the fonts, images, icons that u want to use must be found inside the assets folder  
  // const [loaded] = useFonts({
  //   interBold: require('./assets/fonts/Inter-Bold'),
  //   interRegular:require('./assets/fonts/Inter-Regular.ttf'),
  //   interMedium:require('./assets/fonts/Inter-Medium.ttf'),
  //   interSemiBold:require('./assets/fonts/Inter-SemiBold.ttf'),
  //   interLight:require('./assets/fonts/Inter-Light.ttf'),
  // })

  // if(!loaded) return null
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false,}} >
        <Stack.Screen  name='Home' component={Home} options={{
          headerShown: false,
        }}/> 
        <Stack.Screen  name='Details' component={Details} options={{
          
        }}/> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
