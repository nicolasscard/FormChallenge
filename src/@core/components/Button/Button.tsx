import React, { Children } from 'react';
import { Text, View } from 'react-native';

import useConfigTheme from '@hooks/useConfigTheme';

import useStyles from './styles';
import { props } from 'ramda';

interface Props { 

}

const Button: React.FC<Props> = (Props) => {
  const { configTheme } = useConfigTheme();
  const styles = useStyles(configTheme);
  console.log('button props')
  console.log(Props)
  return (
    <View style={styles.container}>
         {Props.children}
    </View>
  )
}

export default Button;
