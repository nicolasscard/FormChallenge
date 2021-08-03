import React from 'react';
import { Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import useConfigTheme from '@hooks/useConfigTheme';
import useStyles from './styles';

import { Props } from '@navigation/stack.navigation'

const Home: React.FC<Props> = () => {
  const { configTheme } = useConfigTheme();
  const styles = useStyles(configTheme);
  

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      
    </SafeAreaView>
  )



}

export default Home;
