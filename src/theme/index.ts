import {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {Dimensions, Platform} from 'react-native';

const colors = {
  white: 'white',
  black: 'black',
  red: 'red',
  yellow: 'yellow',
  blue: 'blue',
};

const {width, height} = Dimensions.get('window');

export const device = {
  width,
  height,
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
};

const theme = {
  colors,
  device,
};

export type Theme = typeof theme;

export default theme as Theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const useTheme = () => useContext(ThemeContext);
