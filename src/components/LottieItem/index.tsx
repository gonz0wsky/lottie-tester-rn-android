import React, {FC, memo, useCallback} from 'react';
import LottieView from 'lottie-react-native';
import {Container} from './styles';
import {Props} from './types';

const LottieItem: FC<Props> = ({index, source, onPress, style}) => {
  const handlePress = useCallback(() => onPress(index), [index, onPress]);
  return (
    <Container style={style} onPress={handlePress}>
      <LottieView source={source} />
    </Container>
  );
};

export default memo(LottieItem);
