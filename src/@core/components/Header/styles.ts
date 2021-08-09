import { StyleSheet, StatusBar, Platform } from 'react-native';

import { ConfigEntity } from '@hooks/useConfigTheme';

export const useStyles = (props: ConfigEntity) => {
  return StyleSheet.create({
    statusBar: {
      height: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight,
    },    
    title: {
      color: props.textLight,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    description: {
      paddingHorizontal: 10,
      paddingTop: 15,
      color: props.textLight,
      fontSize: 14,
      textAlign: 'center',
    },
  })
};
