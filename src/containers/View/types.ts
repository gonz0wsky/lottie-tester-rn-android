import {MainStackScreenProps} from '../../navigators/types';

export type Props = MainStackScreenProps<'View'> & {};

export type ContainerProps = {
  backgroundColor: string;
};

export type LottieContainerProps = {
  backgroundColor: string;
};

export type LottieProps = {
  degrees: number;
  sizePercentage: number;
};
