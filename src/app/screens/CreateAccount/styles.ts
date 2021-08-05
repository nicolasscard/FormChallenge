import { StyleSheet } from 'react-native';
import { ConfigEntity } from '@hooks/useConfigTheme';

export default (props: ConfigEntity) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: props.backgroundScreens,
      backgroundColor: 'red',
      // justifyContent: 'center',
      // alignItems: 'flex-start'
    }
  })
}
