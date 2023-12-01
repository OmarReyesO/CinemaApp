import React, {useState} from 'react';
import {
  ScrollContainer,
  CategoryIcon,
  CategoryItem,
  CategorySection,
  CategoryTitle,
  Container,
  FoodCard,
  FoodImage,
  FoodName,
  FoodPrice,
} from './styles';
import {dummyFood} from '../../utils/foods';
import {StackParamList} from '../FoodRouter';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<StackParamList>;

const Food = ({route, navigation}: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('combos');

  return (
    <ScrollContainer>
      <CategorySection>
        <CategoryItem onPress={() => setSelectedCategory('combos')}>
          <CategoryIcon
            name="food-outline"
            active={selectedCategory === 'combos'}
          />
          <CategoryTitle
            fontSize="small"
            active={selectedCategory === 'combos'}>
            Combos
          </CategoryTitle>
        </CategoryItem>
        <CategoryItem onPress={() => setSelectedCategory('foods')}>
          <CategoryIcon
            name="food-hot-dog"
            active={selectedCategory === 'foods'}
          />
          <CategoryTitle fontSize="small" active={selectedCategory === 'foods'}>
            Foods
          </CategoryTitle>
        </CategoryItem>
        <CategoryItem onPress={() => setSelectedCategory('popcorn')}>
          <CategoryIcon
            name="popcorn"
            active={selectedCategory === 'popcorn'}
          />
          <CategoryTitle
            fontSize="small"
            active={selectedCategory === 'popcorn'}>
            Popcorn
          </CategoryTitle>
        </CategoryItem>
        <CategoryItem onPress={() => setSelectedCategory('soda')}>
          <CategoryIcon
            name="bottle-soda-classic-outline"
            active={selectedCategory === 'soda'}
          />
          <CategoryTitle fontSize="small" active={selectedCategory === 'soda'}>
            Soda
          </CategoryTitle>
        </CategoryItem>
      </CategorySection>
      <Container>
        {dummyFood
          .filter(i => i.category === selectedCategory)
          .map(i => {
            return (
              <FoodCard
                key={i.id}
                onPress={() => navigation.navigate('FoodInfo', i)}>
                <FoodImage source={{uri: i.picture}} />
                <FoodName>{i.name}</FoodName>
                <FoodPrice>${i.sizes[0].price.toFixed(2)}</FoodPrice>
              </FoodCard>
            );
          })}
      </Container>
    </ScrollContainer>
  );
};

export default Food;
