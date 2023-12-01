import styled from 'styled-components/native';
import Text from '../../components/Text';
import Animated from 'react-native-reanimated';

export const Container = styled(Animated.View)`
  width: 100%;
  display: flex;
`;

export const Card = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  background-color: ${props => props.theme.colors.background};
  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.primary};
`;

export const CardContent = styled.View`
  flex: 3;
`;

export const CardRemove = styled(Animated.View)`
  display: flex;
  justify-content: center;
  height: 100%;
  position: absolute;
  right: 0%;
`;

export const CardRemoveText = styled(Text)`
  color: red;
`;

export const QtySelector = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const QtyBtn = styled.Pressable`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
