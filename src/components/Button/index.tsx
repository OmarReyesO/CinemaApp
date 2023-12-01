import React from 'react';
import {Container, ButtonText, ContainerProps} from './styles';
const Button: React.FC<ContainerProps> = props => {
  const enabled = !props.loading && !props.disabled;

  return (
    <Container
      activeOpacity={enabled ? 0.7 : 1}
      disabled={!enabled}
      onPress={enabled ? props.onPress : () => {}}
      {...props}>
      {!props.loading && (
        <ButtonText
          fontWeight="bold"
          fontSize="regular"
          variant={props.variant}
          color={props.color}>
          {props.children}
        </ButtonText>
      )}
    </Container>
  );
};
export default Button;
