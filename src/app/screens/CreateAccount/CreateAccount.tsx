import React from 'react';
import useConfigTheme from '@hooks/useConfigTheme';
import useStyles from './styles';
import { Props } from '@navigation/stack.navigation';
import { Header, Card } from '@components/index';
import { headerStyle } from '@components/Header/Header';
import { tittle, description } from '@assets/Texts';

const CreateAccount: React.FC<Props> = () => {
  const { configTheme } = useConfigTheme();
  const styles = useStyles(configTheme);
  
  return (
      <Header 
        title={tittle} 
        description={description} 
        headerStyle={headerStyle.blue}
      />
      
  );
}

export default CreateAccount;
