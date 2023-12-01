import styled from 'styled-components/native';
import Text from '../../components/Text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const Container = styled.View`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  row-gap: 20px;
  column-gap: 25px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${props => props.theme.colors.background};
`;

export const CategorySection = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 80px;
  background-color: ${props => props.theme.colors.background};
`;

export const CategoryItem = styled.Pressable`
  flex: 1;
  display: flex;
  align-items: center;
`;

type Props = {
  active: boolean;
};

export const CategoryIcon = styled(Icon)<Props>`
  color: ${props =>
    props.active
      ? props.theme.dark
        ? props.theme.colors.primary
        : props.theme.colors.secondary
      : props.theme.colors.secondaryBackground};
  font-size: 35px;
`;

export const CategoryTitle = styled(Text)<Props>`
  color: ${props =>
    props.active
      ? props.theme.dark
        ? props.theme.colors.primary
        : props.theme.colors.secondary
      : props.theme.colors.secondaryBackground};
  font-weight: 600;
`;

export const FoodCard = styled.Pressable`
  height: 250px;
  flex-basis: 46%;
  background-color: ${props => props.theme.colors.background};
  border: ${props =>
    props.theme.dark
      ? `1px solid ${props.theme.colors.secondaryBackground}`
      : 'none'};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

export const FoodImage = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const FoodName = styled(Text).attrs({
  fontSize: 'large',
  fontWeight: 'bold',
})`
  font-weight: 600;
  margin: 0;
  text-align: center;
`;

export const FoodPrice = styled(Text).attrs({
  fontSize: 'h4',
  fontWeight: 'bold',
})`
  margin: 0;
`;
