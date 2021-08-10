import React, { useState } from 'react';
import { View, ImageSourcePropType, TextInputProps, Image } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import useConfigTheme from '@hooks/useConfigTheme';
import useStyles from './styles';
import { Field, reduxForm, InjectedFormProps, DecoratedFormProps } from 'redux-form';

interface Props extends TextInputProps { 
  input: Field,
  source: ImageSourcePropType,
  name?: string,
  label?: string,
  value: string,
  // onChangeText?: (value: string) => void,
  error?: boolean,
  touched?: boolean,
}

const ImageTextInput: React.FC<Props> = (Props) => {
  const { configTheme } = useConfigTheme();
  const styles = useStyles(configTheme);
  const [focus, setFocus] = useState<boolean>(false);

  const onChangeText = (value: string) => {
    // Props.onChangeText(value);
  }


  // console.log('error input');
  // console.log(Props.error);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image 
        source={Props.source}
        style={{ 
          ...styles.image, 
          tintColor: Props.error && Props.touched ? configTheme.error : focus ? configTheme.textSecondary : configTheme.textInputTitle 
        }}
      />

      <Input
        {...Props.input} 
        label={Props.label}
        value={Props.value}
        // value={Props.value}
        onChangeText={Props.onChangeText}
        // onFocus={() => setFocus(true)}
        // onBlur={() => setFocus(false)}
        error={Props.error && Props.touched}
        autoCapitalize={'none'}
        style={styles.textInput}
        keyboardType={Props.keyboardType}
        secureTextEntry={Props.secureTextEntry}
        theme={{ 
          colors: { 
            text: configTheme.primary, 
            primary: configTheme.textSecondary, 
            placeholder: configTheme.textInputTitle,
            error: configTheme.error
          },
        }}
        
      />
    </View> 
  );
}

export default ImageTextInput;
