import styled, {css} from 'styled-components/native';
import Text from '../../components/Text';
import Button from '../../components/Button';

type MovieShowtimesContainerProps = {
  show: boolean;
};

type ShowTimeCardProps = {
  selected: boolean;
};

export const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background};
`;

// Movie poster

export const MoviePosterContainer = styled.View`
  height: 350px;
  border-radius: 10px;
  z-index: 0;
`;

export const MoviePoster = styled.Image`
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

// Movie info

export const MovieInfoContainer = styled.View`
  flex: 2;
  display: flex;
  gap: 1px;
  padding: 20px;
  margin-top: -20px;
  border-radius: 25px;
  background-color: ${props => props.theme.colors.background};
  z-index: 1;
  overflow: hidden;
`;

export const Title = styled(Text).attrs({
  fontSize: 'h3',
  fontWeight: 'bold',
})`
  color: ${props => props.theme.colors.text};
  font-weight: 600;
`;

export const Subtitle = styled(Text).attrs({
  fontSize: 'regular',
  fontWeight: 'light',
})`
  color: #8a8a8a;
`;

export const SubtitlesContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
  gap: 20px;
`;

export const CollapseButton = styled.Pressable`
  flex: 1;
  align-self: center;
  margin: 0;
  padding: 0;
`;

export const CollapseButtonText = styled(Text).attrs({
  fontSize: 'small',
  fontWeight: 'light',
})`
  color: #8a8a8a;
`;

// Movie info - description

export const Description = styled(Text).attrs({
  fontSize: 'regular',
})`
  color: ${props => props.theme.colors.text};
  margin: 2px 0;
`;

// Movie show times info
export const MovieShowtimesContainer = styled.View<MovieShowtimesContainerProps>`
  flex: 5;
  display: ${props => (props.show ? 'flex' : 'none')};
  padding: 0 20px 20px 20px;
  background-color: ${props => props.theme.colors.background};
`;

export const SelectorsContainer = styled.View`
  flex: 1;
  display: flex;
  height: 40px;
  margin: 0 0 15px 0;
  flex-direction: row;
  gap: 15px;
`;

export const SelectorBox = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  border: 1.5px solid black;
  border-radius: 10px;
`;

export const SelectorText = styled(Text).attrs({
  fontSize: 'small',
})`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  margin: auto;
`;

export const TicketButton = styled(Button)`
  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
`;

export const TheaterCard = styled.View`
  flex: 1;
  width: 100%;
  margin: 0 0 15px 0;
  padding: 10px 15px;
  background-color: ${props =>
    props.theme.dark
      ? props.theme.colors.background
      : props.theme.colors.secondaryLight};
  border-radius: 10px;
  border: ${props =>
    props.theme.dark ? `1px solid ${props.theme.colors.secondary}` : 'none'};
`;

export const TheaterCardHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
`;

export const TheaterTitle = styled(Text).attrs({
  fontSize: 'regular',
})`
  color: ${props => props.theme.colors.text};
  font-weight: 600;
`;

export const TheaterSubtitle = styled(Text).attrs({
  fontSize: 'small',
})`
  color: #8a8a8a;
`;

export const ShowtimesScrollView = styled.ScrollView`
  flex: 3;
`;

export const ShowTimesContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin: 0 0 15px 0;
  padding: 0 5px;
`;

export const ShowTimeCard = styled.Pressable<ShowTimeCardProps>`
  display: flex;
  align-content: center;
  justify-content: center;
  height: 40px;
  width: 95px;
  background-color: ${props =>
    props.selected
      ? props.theme.colors.secondary
      : props.theme.colors.background};
  border-color: ${props => props.theme.colors.secondary};
  border: 1px solid;
`;

export const ShowTimeText = styled.Text<ShowTimeCardProps>`
  color: ${props => (props.selected ? '#fff' : props.theme.colors.secondary)};
  text-align: center;
`;
