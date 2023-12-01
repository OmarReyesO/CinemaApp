import styled from 'styled-components/native';
import Text from '../../components/Text';

type SizeCardProps = {
  selected: boolean;
};

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
`;

export const ImageContainer = styled.View`
  flex: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;
`;

export const FoodImage = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InfoContainer = styled.View`
  flex: 4;
  width: 100%;
  display: flex;
  padding: 30px;
  background-color: ${props =>
    props.theme.dark
      ? props.theme.colors.background
      : props.theme.colors.primary};
  border-radius: 45px;
`;

export const InfoTitle = styled(Text).attrs({
  fontSize: 'h3',
  fontWeight: 'regular',
})`
  font-weight: 600;
`;

export const InfoDescription = styled(Text).attrs({
  fontSize: 'regular',
  fontWeight: 'regular',
})`
  color: ${props => props.theme.colors.text};
  text-align: justify;
  padding: 10px 0;
`;

export const PriceContainer = styled.View`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-top: -120px;
  background-color: ${props => props.theme.colors.background};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const SizesContainer = styled.View`
  display: flexl;
  flex-direction: row;
  gap: 10px;
  padding: 10px 0;
`;

export const SizeCard = styled.Pressable<SizeCardProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 130px;
  height: 70px;
  background-color: ${props =>
    props.selected
      ? props.theme.colors.primary
      : props.theme.colors.background};
  border: 1px solid black;
  border-radius: 10px;
`;
