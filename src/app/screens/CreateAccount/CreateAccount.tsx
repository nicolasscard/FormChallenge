import React, {useState } from 'react';
import { View, ImageSourcePropType, Text} from 'react-native';
import useConfigTheme from '@hooks/useConfigTheme';
import useStyles from './styles';
import { Props } from '@navigation/stack.navigation';
import { Header, Card, ImageTextInput } from '@components/index';
import { headerStyle } from '@components/Header/Header';
import { Button } from 'react-native-paper';
import { 
  headerTittleTxt, 
  headerDescriptionTxt, 
  descriptionBottomTxt, 
  firstNameTxt, 
  lastNameTxt, 
  emailTxt, 
  passwordTxt,
  termsTxt,
  buttonTxt
 } from '@assets/Texts/CreateAccount';
import { mailRegEx } from './Createaccount.test';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Error {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  password: boolean;
}

type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}


const CreateAccount: React.FC<Props> = ({ navigation, route }) => {
  const { configTheme } = useConfigTheme();
  const styles = useStyles(configTheme);
  
  const personIcon: ImageSourcePropType = require("@assets/media/person2x.png");
  const emailIcon: ImageSourcePropType = require("@assets/media/emailIcon.png");
  const passwordIcon: ImageSourcePropType = require("@assets/media/passwordIcon.png");

  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [inputError, setInputError] = useState<Error>({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const [diabledButton, setDisabledButton] = useState<boolean>(true);


  const onChangeFirstName = (value: string, error?: boolean) => {
    let newUser = user;
    newUser.firstName = value;
    if (value.length == 0) {
      setInputError({...inputError, firstName: true });
      setDisabledButton(true);
    }
    else {
      setInputError({...inputError, firstName: false });
      setDisabledButton(false);
    }
    setUser(newUser);
  };
  const onChangeLastName = (value: string) => {
    let newUser = user;
    newUser.lastName = value;
    if (value.length == 0) {
      setInputError({...inputError, lastName: true });
      setDisabledButton(true);
    }
    else {
      setInputError({...inputError, lastName: false });
      setDisabledButton(false);
    }
    setUser(newUser);
  };
  const onChangeEmail = (value: string) => {
    let newUser = user;
    newUser.email = value;
    if (value.length == 0 || !validateEmail(value)) {
      setInputError({...inputError, email: true });
      setDisabledButton(true);
    }
    else { 
      setInputError({...inputError, email: false });
      setDisabledButton(false);
    }
    setUser(newUser);
  };
  const onChangePassword = (value: string) => {
    let newUser = user;
    newUser.password = value;
    if (value.length < 4) {
      setInputError({...inputError, password: true });
      setDisabledButton(true);
    }
    else {
      setInputError({...inputError, password: false });
      setDisabledButton(false);
    }
    setUser(newUser);
  };

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
          <ImageTextInput 
            source={personIcon}
            label={firstNameTxt} 
            value={user.firstName}
            onChangeText={(value) => onChangeFirstName(value)}
            error={inputError.firstName}
          />
          <ImageTextInput 
            source={personIcon}
            label={lastNameTxt} 
            value={user.lastName}
            onChangeText={(value) => onChangeLastName(value)}
            error={inputError.lastName}
          />
          <ImageTextInput 
            source={emailIcon}
            label={emailTxt} 
            value={user.email}
            onChangeText={(value) => onChangeEmail(value)}
            error={inputError.email}
            keyboardType={'email-address'}
          />
          <ImageTextInput 
            source={passwordIcon}
            label={passwordTxt} 
            value={user.password}
            onChangeText={(value) => onChangePassword(value)}
            error={inputError.password}
            secureTextEntry={true}
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
            onPress={() => navigation.navigate('LinkYourBank')} 
            style={styles.button}
            labelStyle={{ fontSize: 12 }}
            loading={false}
            disabled={diabledButton}
          >
            {buttonTxt}
          </Button>
        </View>

      </View>
    </SafeAreaView>
  );
}

export default CreateAccount;
