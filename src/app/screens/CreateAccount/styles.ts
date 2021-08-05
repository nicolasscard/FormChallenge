import { StyleSheet } from 'react-native';
import { ConfigEntity } from '@hooks/useConfigTheme';

export default (props: ConfigEntity) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.backgroundScreens,
      // backgroundColor: 'red',
      // justifyContent: 'center',
      // alignItems: 'flex-start'
    },
    description: {
      paddingHorizontal: 20,
      color: props.textSecondary,
      fontSize: 12,
      textAlign: 'center',
      // lineHeight: 23.44
    },
    button: {
      height: 50, 
      width: 256, 
      backgroundColor: props.primaryButton
    }
  })
}
