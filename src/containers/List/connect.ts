import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {lotties} from '../../constants';
import {Props} from './types';

const useConnect = () => {
  const {navigate} = useNavigation<Props['navigation']>();

  const handlePress = useCallback(
    (index: number) => {
      const lottie = lotties[index];
      navigate('View', {lottie});
    },
    [navigate],
  );

  return {handlePress};
};

export default useConnect;
