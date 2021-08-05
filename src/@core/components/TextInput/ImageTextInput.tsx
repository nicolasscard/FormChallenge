import React, { useState } from 'react';
import { View, ImageSourcePropType, TextInputProps } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import { ImageIcon } from '../';
import useConfigTheme from '@hooks/useConfigTheme';
import useStyles from './styles';

interface Props extends TextInputProps { 
  source: ImageSourcePropType,
  label: string,
  value: string,
  onChangeText: (value: string) => void,
  error?: boolean,
}

const ImageTextInput: React.FC<Props> = (Props) => {
  const { configTheme } = useConfigTheme();
  const styles = useStyles(configTheme);
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

      <Input
        label={Props.label}
        value={Props.value}
        onChangeText={Props.onChangeText}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        error={Props.error}
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
      >
              <ImageIcon 
        source={Props.source}
        focus={focus}
      />

      </Input>
    </View> 
  );
}

export default ImageTextInput;
