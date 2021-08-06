import styled from 'styled-components/native';
import AnimatedLottieView from 'lottie-react-native';
import {ContainerProps, LottieContainerProps, LottieProps} from './types';

export const Container = styled.View<ContainerProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({backgroundColor}) => backgroundColor};
`;

export const LottieContainer = styled.View<LottieContainerProps>`
  border-width: 1px;
  border-color: ${({backgroundColor}) =>
    backgroundColor === 'black' ? 'white' : 'black'};
`;

export const Lottie = styled(AnimatedLottieView)<LottieProps>`
  transform: ${({degrees}) => `rotate(${degrees}deg)`};
  width: ${({theme, sizePercentage}) =>
    theme.device.width * (sizePercentage / 100)}px;
`;

export const BottomContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 8%;
  background-color: white;
`;

export const Scroll = styled.ScrollView.attrs({
  horizontal: true,
})``;

export const Button = styled.TouchableOpacity`
  padding: 10px 20px;
  margin: 0 5px;
  background-color: black;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: white;
`;
