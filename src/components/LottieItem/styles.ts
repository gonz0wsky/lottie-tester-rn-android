import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: ${({theme}) => theme.device.width / 2 - 24}px;
  aspect-ratio: 1;
  border-width: 1px;
  border-color: black;
  border-radius: 12px;
`;
