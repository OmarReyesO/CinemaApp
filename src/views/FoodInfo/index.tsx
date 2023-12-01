import React, {useState, useContext} from 'react';
import {
  Container,
  FoodImage,
  ImageContainer,
  InfoContainer,
  PriceContainer,
  InfoTitle,
  InfoDescription,
  SizesContainer,
  SizeCard,
} from './styles';
import Text from '../../components/Text';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../FoodRouter';
import {ScrollView, View} from 'react-native';
import {Food} from '../../@types/Food';
import {FoodSize} from '../../@types/Food';
import {Cart, SaleItem} from '../../@types/Sale';
import Button from '../../components/Button';
import {CartContext} from '../../context/CartContext';

type Props = NativeStackScreenProps<StackParamList>;

const FoodInfo = ({route, navigation}: Props) => {
  const {saveItem} = useContext(CartContext) as Cart;
  const foodItem = route.params as Food;
  const [selectedSize, setSelectedSize] = useState<FoodSize>();

  const onAddToCart = () => {
    if (selectedSize) {
      navigation.goBack();
      const cartItem: SaleItem = {
        id: 'f' + foodItem.id,
        price: selectedSize?.price,
        size: selectedSize.size,
        name: foodItem.name,
        qty: 1,
        type: 'food',
      };
      saveItem(cartItem);
    }
  };

  return (
    <Container>
      <ImageContainer>
        <FoodImage source={{uri: foodItem.picture}} />
      </ImageContainer>
      <InfoContainer>
        <InfoTitle>Details</InfoTitle>
        <InfoDescription>{foodItem.description}</InfoDescription>
        <InfoTitle>Sizes</InfoTitle>
        <ScrollView horizontal>
          <SizesContainer>
            {foodItem.sizes.map((s, i) => (
              <SizeCard
                key={i}
                onPress={() => setSelectedSize(s)}
                selected={
                  selectedSize?.price === s.price &&
                  selectedSize.size === s.size
                }>
                <Text color="text">
                  {s.size.charAt(0).toUpperCase() + s.size.slice(1)}
                </Text>
                <Text color="text">${s.price.toFixed(2)}</Text>
              </SizeCard>
            ))}
          </SizesContainer>
        </ScrollView>
      </InfoContainer>
      <PriceContainer>
        <View>
          <Text fontSize="h3" fontWeight="extraBold">
            ${selectedSize?.price.toFixed(2) ?? '0.00'}
          </Text>
          <Text fontSize="regular" fontWeight="regular">
            Total
          </Text>
        </View>
        <Button color="primary" onPress={onAddToCart}>
          Add to cart
        </Button>
      </PriceContainer>
    </Container>
  );
};

export default FoodInfo;
