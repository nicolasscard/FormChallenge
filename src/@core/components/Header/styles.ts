import { StyleSheet, StatusBar, Platform } from 'react-native';

import { ConfigEntity } from '@hooks/useConfigTheme';

export const useStyles = (props: ConfigEntity) => {
  return StyleSheet.create({
    statusBar: {
      height: Platform.OS === 'ios' ? 60 : StatusBar.currentHeight
    },    
    title: {
      color: props.textLight,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      // lineHeight: 23.44
    },
    description: {
      paddingHorizontal: 20,
      color: props.textLight,
      fontSize: 14,
      textAlign: 'center',
      // lineHeight: 23.44
    },
  })
};
