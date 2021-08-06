import React, {FC} from 'react';
import {
  Container,
  LottieContainer,
  Lottie,
  BottomContainer,
  Scroll,
  Button,
  ButtonText,
} from './styles';
import useConnect from './connect';

const View: FC = () => {
  const {
    source,
    sizePercentage,
    backgroundColor,
    degrees,
    handleChangeBackgroundColor,
    handleChangeDegrees,
    handlePressIncrease,
    handlePressReduce,
  } = useConnect();
  return (
    <Container {...{backgroundColor}}>
      <LottieContainer {...{backgroundColor}}>
        <Lottie {...{degrees, source, sizePercentage}} autoPlay loop />
      </LottieContainer>
      <BottomContainer>
        <Scroll>
          <Button onPress={handleChangeDegrees}>
            <ButtonText>{`Rotation ${degrees}`}</ButtonText>
          </Button>
          <Button onPress={handlePressReduce}>
            <ButtonText>Reduce</ButtonText>
          </Button>
          <Button onPress={handlePressIncrease}>
            <ButtonText>Increase</ButtonText>
          </Button>
          <Button onPress={handleChangeBackgroundColor}>
            <ButtonText>Change background</ButtonText>
          </Button>
        </Scroll>
      </BottomContainer>
    </Container>
  );
};

export default View;
