import {useRoute} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import theme from '../../theme';

const useConnect = () => {
  const [degrees, setDegrees] = useState(0);
  const [sizePercentage, setSizePercentage] = useState(50);
  const [backgroundColor, setBackgroundColor] = useState(theme.colors.white);

  const {params} = useRoute();
  const source = params?.lottie;

  const handleChangeDegrees = useCallback(() => {
    const newDegrees = degrees + 90;
    setDegrees(newDegrees === 360 ? 0 : newDegrees);
  }, [degrees]);

  const handlePressReduce = useCallback(() => {
    if (sizePercentage >= 20) {
      setSizePercentage(s => s - 10);
    }
  }, [sizePercentage]);

  const handlePressIncrease = useCallback(() => {
    if (sizePercentage <= 90) {
      setSizePercentage(s => s + 10);
    }
  }, [sizePercentage]);

  const handleChangeBackgroundColor = useCallback(() => {
    const colors = Object.values(theme.colors);
    const index = colors.findIndex(color => color === backgroundColor);
    const newColor = colors?.[index + 1] ?? colors[0];
    setBackgroundColor(newColor);
  }, [backgroundColor]);

  return {
    source,
    sizePercentage,
    backgroundColor,
    degrees,
    handleChangeBackgroundColor,
    handleChangeDegrees,
    handlePressIncrease,
    handlePressReduce,
  };
};

export default useConnect;
