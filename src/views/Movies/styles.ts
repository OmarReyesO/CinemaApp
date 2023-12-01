import styled, {css} from 'styled-components/native';
import Text from '../../components/Text';
import Button from '../../components/Button';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const FeaturedMovieCard = styled.View`
  height: 550px;
  border-radius: 10px;
  z-index: 0;
`;

export const FeaturedMovieImg = styled.Image`
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: cover;
`;

export const ImageOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const FeaturedMovieTitle = styled(Text).attrs({
  fontSize: 'h2',
  fontWeight: 'bold',
})`
  width: 90%;
  position: absolute;
  bottom: 190px;
  left: 16px;
  color: #fff;
  font-weight: 600;
`;

export const FeaturedMovieButton = styled(Button)`
  position: absolute;
  bottom: 125px;
  left: 16px;
  border-width: 0px;
  border-top-width: 1px;
  border-color: ${props => props.theme.colors.primary};

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
`;

export const MoviesContainer = styled.View`
  display: flex;
  padding: 20px;
  margin-top: -100px;
  border-radius: 25px;
  background-color: ${props => props.theme.colors.background};
  z-index: 1;
`;

export const Title = styled(Text).attrs({
  fontSize: 'h4',
  fontWeight: 'bold',
})`
  color: ${props => props.theme.colors.text};
  font-weight: 600;
`;

export const Highlight = styled(Title)`
  color: ${props => props.theme.colors.primary};
`;

export const Description = styled(Text)`
  color: ${props => props.theme.colors.text};
`;
