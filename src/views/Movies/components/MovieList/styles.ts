import styled from 'styled-components/native';
import Text from '../../../../components/Text';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 0 0 10px 0;
`;

export const Title = styled(Text).attrs({
  fontSize: 'h4',
  fontWeight: 'bold',
})`
  color: ${props => props.theme.colors.text};
  font-weight: 600;
  margin: 0 0 15px 0;
`;

export const MoviesContainer = styled.ScrollView`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const MovieCard = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 150px;
  margin: 0 2px;
`;

export const MovieTitle = styled(Text).attrs({
  fontSize: 'regular',
  fontWeight: 'bold',
})`
  color: ${props => props.theme.colors.text};
  width: 100%;
  font-weight: 500;
`;

export const MovieImg = styled.Image`
  width: 135px;
  height: 180px;
  border-radius: 10px;
  object-fit: cover;
`;
