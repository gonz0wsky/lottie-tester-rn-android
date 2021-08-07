import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type ScreensParams = {
  List: undefined;
  View: {lottie: any};
};

export interface MainStackScreenProps<ScreenName extends keyof ScreensParams> {
  navigation: StackNavigationProp<ScreensParams, ScreenName>;
  route: RouteProp<ScreensParams, ScreenName>;
}
export type MainNavigationProp = StackNavigationProp<ScreensParams>;
export type Props = {};
