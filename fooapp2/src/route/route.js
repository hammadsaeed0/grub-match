import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Join, CreateRoom, Guide, Splash, Swap} from '../screen';



const Stack = createNativeStackNavigator();

const MainNav = () => {

  return (
      
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName={"splash"} >  
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Join" component={Join} options={{headerShown: false}} />
        <Stack.Screen name="Guide" component={Guide} options={{headerShown: false}} />
        <Stack.Screen name="CreateRoom" component={CreateRoom} options={{headerShown: false}} />
        <Stack.Screen name="Swap" component={Swap} options={{headerShown: false}} />
      
      </Stack.Navigator>
    </NavigationContainer>
 
  )
}

export default MainNav