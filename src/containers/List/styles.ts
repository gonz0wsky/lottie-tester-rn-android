import styled from 'styled-components/native';
import {LottieItem} from '../../components';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
}))`
  flex: 1;
`;

export const Lottie = styled(LottieItem)`
  margin: 10px 12px;
`;
