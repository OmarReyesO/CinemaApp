import {PressableProps} from 'react-native';
import styled from 'styled-components/native';

type ItemsQtyContainerProps = {
  show: boolean;
};

type ItemsQtyContainerTextProps = {
  show: boolean;
  color: string;
};

export const Container = styled.Pressable<PressableProps>`
  width: 50px;
  display: inline;
`;

export const IconContainer = styled.View`
  left: 8px;
  bottom: -5px;
`;

export const ItemsQtyContainer = styled.View<ItemsQtyContainerProps>`
  flex: 1;
  background-color: ${props => (props.show ? 'red' : 'transparent')};
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  bottom: 30px;
  left: 30px;
`;

export const ItemsQtyContainerText = styled.Text<ItemsQtyContainerTextProps>`
  color: ${props => (props.show ? props.color : 'transparent')};
`;
