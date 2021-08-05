import React, {useState } from 'react';
import { View, ImageSourcePropType, Text} from 'react-native';
import useConfigTheme from '@hooks/useConfigTheme';
import useStyles from './styles';
import { Props } from '@navigation/stack.navigation';
import { Header, Card, ImageTextInput } from '@components/index';
import { headerStyle } from '@components/Header/Header';
import { tittleTxt, descriptionHeaderTxt, descriptionBottomTxt, firstNameTxt, lastNameTxt, emailTxt, passwordTxt } from '@assets/Texts/CreateAccount';
import { mailRegEx } from './Createaccount.test';

interface Error {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  password: boolean;
}

const CreateAccount: React.FC<Props> = () => {
  const { configTheme } = useConfigTheme();
  const styles = useStyles(configTheme);
  
  const personIcon: ImageSourcePropType = require("@assets/media/person2x.png");
  const emailIcon: ImageSourcePropType = require("@assets/media/emailIcon.png");
  const passwordIcon: ImageSourcePropType = require("@assets/media/passwordIcon.png");

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [inputError, setInputError] = useState<Error>({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });


  const onChangeFirstName = (value: string) => {
    if (value.length == 0) {
      setInputError({...inputError, firstName: true });
    }
    else {
      setInputError({...inputError, firstName: false });
    }
    setFirstName(value);
  };
  const onChangeLastName = (value: string) => {
    if (value.length == 0) {
      setInputError({...inputError, lastName: true });
    }
    else {
      setInputError({...inputError, lastName: false });
    }
    setLastName(value);
  };
  const onChangeEmail = (value: string) => {
    if (value.length == 0 || !validateEmail(value)) {
      setInputError({...inputError, email: true });
    }
    else { 
      setInputError({...inputError, email: false });
    }
    setEmail(value);
  };
  const onChangePassword = (value: string) => {
    if (value.length < 4) {
      setInputError({...inputError, password: true });
    }
    else {
      setInputError({...inputError, password: false });
    }
    setPassword(value);
  };

  const validateEmail = (email: string) => {
    return mailRegEx.test(String(email).toLowerCase());
}

  return (
    <View style={styles.container}>

      <Header 
        title={tittleTxt} 
        description={descriptionHeaderTxt} 
        headerStyle={headerStyle.blue}
      />

      <Card>
        <ImageTextInput 
          source={personIcon}
          label={firstNameTxt} 
          value={firstName}
          onChangeText={(value) => onChangeFirstName(value)}
          error={inputError.firstName}
        />
        <ImageTextInput 
          source={personIcon}
          label={lastNameTxt} 
          value={lastName}
          onChangeText={(value) => onChangeLastName(value)}
          error={inputError.lastName}
        />
        <ImageTextInput 
          source={personIcon}
          label={emailTxt} 
          value={email}
          onChangeText={(value) => onChangeEmail(value)}
          error={inputError.email}
          keyboardType={'email-address'}
        />
        <ImageTextInput 
          source={personIcon}
          label={passwordTxt} 
          value={password}
          onChangeText={(value) => onChangePassword(value)}
          error={inputError.password}
          secureTextEntry={true}
        />

   
      </Card>
    </View>



);

}

export default CreateAccount;
