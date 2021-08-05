import { StyleSheet } from 'react-native';

import { ConfigEntity } from '@hooks/useConfigTheme';

export default (props: ConfigEntity) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.backgroundScreens,
    },
    image: {
      width: 20, 
      height: 20, 
      marginRight: 5,
    }
  })
};
