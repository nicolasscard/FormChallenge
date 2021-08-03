import React from 'react';
import { Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import useConfigTheme from '@hooks/useConfigTheme';
import useStyles from './styles';
import { Props } from '@navigation/stack.navigation';
import { Header, Card } from '@components/index';

const CreateAccount: React.FC<Props> = () => {
  const { configTheme } = useConfigTheme();
  const styles = useStyles(configTheme);
  

  return (
    <SafeAreaView style={styles.container}>
      <Text>CreateAccount</Text>
      
    </SafeAreaView>
  )



}

export default CreateAccount;
