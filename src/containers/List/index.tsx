import React, {FC} from 'react';
import {Container, Lottie} from './styles';
import {lotties} from '../../constants';
import useConnect from './connect';

const List: FC = () => {
  const {handlePress} = useConnect();
  return (
    <Container>
      {lotties?.map((item, index) => (
        <Lottie key={index} index={index} source={item} onPress={handlePress} />
      ))}
    </Container>
  );
};

export default List;
