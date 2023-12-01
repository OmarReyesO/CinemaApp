import React, {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import {
  Container,
  IconContainer,
  ItemsQtyContainer,
  ItemsQtyContainerText,
} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Cart} from '../../@types/Sale';

type CartButtonProps = {
  color: string;
  onPress: () => void;
};

const CartButton = ({color, onPress}: CartButtonProps) => {
  const {items} = useContext(CartContext) as Cart;

  return (
    <Container onPress={onPress}>
      <IconContainer>
        <AntDesign name="shoppingcart" size={30} color={color} />
      </IconContainer>
      <ItemsQtyContainer show={items.length > 0}>
        <ItemsQtyContainerText color={color} show={items.length > 0}>
          {items.length}
        </ItemsQtyContainerText>
      </ItemsQtyContainer>
    </Container>
  );
};
export default CartButton;
