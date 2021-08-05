import React from 'react';
import { ImageSourcePropType, Image } from 'react-native';
import useConfigTheme from '@hooks/useConfigTheme';
import useStyles from './styles';

interface Props { 
  source: ImageSourcePropType,
  tintColor?: string,
  focus?: boolean,
}

const ImageIcon: React.FC<Props> = (Props) => {
  const { configTheme } = useConfigTheme();
  const styles = useStyles(configTheme);

  return (
    <Image
      source={Props.source}
      style={{ 
        ...styles.image, 
        tintColor: Props.focus ? configTheme.textSecondary : configTheme.textInputTitle 
      }}
    />
  );
}

export default ImageIcon;
