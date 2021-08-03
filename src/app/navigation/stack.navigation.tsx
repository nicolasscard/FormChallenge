import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import Home from '@screens/Home/Home';

enableScreens();

/**
 * Specifying undefined means that the route doesn't have params. 
 * A union type with undefined (e.g. SomeType | undefined) means that params are optional.
 */
 type RootStackParamList = {
  Home: undefined
};

// Creatte a generic Props for all screen
const Stack = createStackNavigator<RootStackParamList>();
let screenName: keyof RootStackParamList;

export type Props = {
  navigation: StackNavigationProp<RootStackParamList, typeof screenName>;
  route: RouteProp<RootStackParamList, typeof screenName>;
};

function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Home} />     

    </Stack.Navigator>
  );
}

export default StackNavigation;