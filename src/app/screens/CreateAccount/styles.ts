import { StyleSheet } from 'react-native';
import { ConfigEntity } from '@hooks/useConfigTheme';

export default (props: ConfigEntity) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.backgroundScreens,
    },
    description: {
      paddingHorizontal: 20,
      color: props.textSecondary,
      fontSize: 12,
      textAlign: 'center',
    },
    button: {
      height: 50, 
      width: 256, 
      marginVertical: 30,
      justifyContent: 'center',
      backgroundColor: props.primaryButton
    },
    bottomView: {
      paddingHorizontal: 10, 
      justifyContent: 'space-between', 
      alignItems: 'center'
    },
    errorText: {
      fontSize: 12,
      marginLeft: 30,
      marginTop: 5,
      color: props.error
    },
  })
}
