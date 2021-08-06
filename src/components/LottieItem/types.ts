import {ViewStyle} from 'react-native';

export type Props = {
  index: number;
  source: string;
  onPress: (id: number) => void;
  style?: ViewStyle;
};
