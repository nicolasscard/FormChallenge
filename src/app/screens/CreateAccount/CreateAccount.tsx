import React, {  } from 'react';
import { View, Text, } from 'react-native';
import useConfigTheme from '@hooks/useConfigTheme';
import useStyles from './styles';
import { Props } from '@navigation/stack.navigation';
import { Header, } from '@components/index';
import { headerStyle } from '@components/Header/Header';
import { Button } from 'react-native-paper';
import { 
  headerTittleTxt, 
  headerDescriptionTxt, 
  descriptionBottomTxt, 
  termsTxt,
  buttonTxt
 } from '@assets/Texts/CreateAccount';
 import { useDispatch, useSelector } from 'react-redux';

import { mailRegEx } from './CreateAccount.test';
import { SafeAreaView } from 'react-native-safe-area-context';
import { submit, isInvalid, isSubmitting } from 'redux-form';
import CreateAccountForm from './CreateAccountForm';


export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const CreateAccount: React.FC<Props> = ({ navigation, route }) => {

  const { configTheme } = useConfigTheme();
  const styles = useStyles(configTheme);
  
  const dispatch = useDispatch();
  const isInvalidd = useSelector((state) => 
    isInvalid('Form')(state)
  )

  const isSubmittingg = useSelector((state) => 
  isSubmitting('Form')(state)
)

  const validateEmail = (email: string) => {
    return mailRegEx.test(String(email).toLowerCase());
}

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Header 
       title={headerTittleTxt} 
       description={headerDescriptionTxt} 
       headerStyle={headerStyle.blue}
      />

       <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ padding: 30 }}>
        
          <CreateAccountForm onSubmit={
            (values: any, state: any) => {
              console.log('onSubmit')
              console.log(values)
              
                 // navigation.navigate('LinkYourBank')
            }
          } 
            />

        </View>
        <View style={styles.bottomView}>
          <Text style={styles.description}>
            {descriptionBottomTxt}
            <Text
              onPress={() => navigation.navigate('Terms')} 
              style={{ ...styles.description, color: configTheme.primary}}>
              {termsTxt}
            </Text>
          </Text> 
          <Button 
            mode="contained" 
            onPress={() => {
              dispatch(submit('Form'))
            }} 
            style={styles.button}
            labelStyle={{ fontSize: 12 }}
            loading={false}
            disabled={isInvalidd || isSubmittingg}
          >
            {buttonTxt}
          </Button>
        </View>     
      </View> 

    </SafeAreaView>
  );
}

export default CreateAccount;
