import React from 'react';
// import { Button} from 'react-native';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Header, Card, ImageTextInput } from '@components/index';
import { CreateAccount, Terms, LinkYourBank } from '@screens/index';

// enableScreens();

/**
 * Specifying undefined means that the route doesn't have params. 
 * A union type with undefined (e.g. SomeType | undefined) means that params are optional.
 */
 type RootStackParamList = {
  CreateAccount: undefined
  Terms: undefined
  LinkYourBank: undefined
};

// Creatte a generic Props for all screen
const Stack = createStackNavigator<RootStackParamList>();
let screenName: keyof RootStackParamList;

export type Props = {
  navigation: StackNavigationProp<RootStackParamList, typeof screenName>;
  route: RouteProp<RootStackParamList, typeof screenName>;
};

function StackNavigation(props: Props) {
  return (
    <Stack.Navigator
      initialRouteName="CreateAccount"
      screenOptions={({ navigation, route }) => ({
        headerShown: false
        // headerTitle: props => 'Titulo Header',
     
        // header: () => (
        //   <Header 
        //   title={tittleTxt} 
        //   description={descriptionHeaderTxt} 
        //   headerStyle={headerStyle.blue}
        // />
        // ),
        // headerLeft: () => (
        //   <Button
        //     color='red'
        //     onPress={() => navigation.goBack()}
        //   >
        //     Back
        //   </Button>
        // ),
      })}
    >
      <Stack.Screen name="CreateAccount" component={CreateAccount} />     
      <Stack.Screen name="Terms" component={Terms} />     
      <Stack.Screen name="LinkYourBank" component={LinkYourBank} />     

    </Stack.Navigator>
  );
}

export default StackNavigation;