import styled, {css} from 'styled-components/native';
import Text from '../Text';
import {PressableProps} from 'react-native';

interface VariantProps {
  color: 'primary' | 'secondary';
  variant?: 'outline' | 'default';
}
export interface ContainerProps extends VariantProps, PressableProps {
  loading?: boolean;
  disabled?: boolean;
}

export const Container = styled.Pressable<ContainerProps>`
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 10px 25px;
  border-radius: 30px;
  overflow: hidden;
  border: 2px
    ${props =>
      props.color === 'primary'
        ? props.theme.colors.primary
        : props.theme.colors.secondary};
  ${props =>
    props.variant !== 'outline' &&
    css`
      background-color: ${props.color === 'primary'
        ? props.theme.colors.primary
        : props.theme.colors.secondary};
    `}
`;

export const ButtonText = styled(Text)<VariantProps>`
  color: ${props => {
    if (props.variant === 'outline') {
      return props.color === 'primary'
        ? props.theme.colors.primary
        : props.theme.colors.secondary;
    }
    return props.color === 'primary' ? '#000' : '#fff';
  }};
`;
