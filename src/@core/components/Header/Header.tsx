import React from 'react';
import { View, Text, ImageSourcePropType, ImageBackground, StatusBar } from 'react-native';
import useConfigTheme from '@hooks/useConfigTheme';
import {useStyles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
const backgroundImg: ImageSourcePropType = require("@assets/media/background.png");
const backgroundImg2x: ImageSourcePropType = require("@assets/media/background2x.png");

interface Props {
  title?: String,
  description?: String,
  headerStyle: headerStyle
 }

 export enum headerStyle {
  "blue",
  "violet"
}

const Header: React.FC<Props> = (Props) => {
  const { configTheme } = useConfigTheme();
  const styles = useStyles(configTheme);


  const statusBar = () => {
    const grandientColor = Props.headerStyle == headerStyle.blue 
      ? configTheme.gradientBlue 
      : configTheme.gradientViolet;
    return (
      <LinearGradient 
        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        colors={grandientColor}  
        style={styles.statusBar}
      >
        <StatusBar 
          translucent={true} 
          backgroundColor={'transparent'} 
          barStyle={'light-content'}
        />
      </LinearGradient >
    );
  }

  const headerChilds = () => {
    return (
      <>
        <Text style={styles.title}>
          {Props.title}
        </Text>
        
        {Props.description &&
          <Text style={styles.description}>
            {Props.description}
          </Text>
        }
      </>
    );
  }

  return (
    <View style={{ flex: 1}}>
      {statusBar()}

      {Props.headerStyle == headerStyle.blue
        ? <ImageBackground 
            source={backgroundImg2x}
            style={{ flex: 1, height: Props.description ? '18%' : '8%' }}
          >
            <View style={{
              height: Props.description ? '18%' : '8%',     
               justifyContent: 'space-evenly',
            }}>
              {headerChilds()}
            </View>
          </ImageBackground>
        : <LinearGradient 
            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
            colors={configTheme.gradientViolet}  
            style={{ height: '8%' }}
          >
             <View style={{ flex: 1, justifyContent: 'center' }}>
              {headerChilds()}
            </View>
          </LinearGradient >
      }
    </View>
  )
}

export default Header;
