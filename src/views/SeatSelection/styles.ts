import styled, {css} from 'styled-components/native';
import Text from '../../components/Text';
import Button from '../../components/Button';

type SeatBoxProps = {
  status: string;
};

export const Container = styled.View`
  flex: 1;
  display: flex;
  background-color: ${props => props.theme.colors.background};
`;

export const ScreenContainer = styled.View`
  flex: 1;
  display: flex;
  align-content: center;
  justify-content: center;
  margin: auto;
`;

export const SeatsContainer = styled.View`
  flex: 3;
  display: flex;
  padding: 10px;
`;

export const SeatsInfoContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  padding: 20px 0;
`;

export const SummaryContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 25px;
`;

export const ScreenImg = styled.Image``;

export const SeatRow = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  gap: 8px;
  margin: 5px 0;
`;

export const RowLetter = styled(Text).attrs({
  fontWeight: 'extraBold',
  fontSize: 'small',
})`
  text-align: center;
  align-self: center;
  font-weight: 300;
`;

export const SeatBox = styled.Pressable<SeatBoxProps>`
  flex: 1;
  display: flex;
  align-content: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${props => {
    switch (props.status) {
      case 'available':
        return props.theme.colors.primary;
      case 'unavailable':
        return '#cad1e0';
      case 'selected':
        return props.theme.colors.secondary;
      case 'hidden':
        return 'transparent';
      default:
    }
  }};
`;

export const SeatText = styled(Text).attrs({
  fontWeight: 'extraBold',
  fontSize: 'small',
})`
  text-align: center;
  font-weight: 300;
  color: ${props => props.theme.colors.background};
`;

export const SeatInfo = styled.View`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const SeatInfoColor = styled.View<SeatBoxProps>`
  width: 15px;
  height: 15px;
  border-radius: 1000px;
  background-color: ${props => {
    switch (props.status) {
      case 'available':
        return props.theme.colors.primary;
      case 'unavailable':
        return '#cad1e0';
      case 'selected':
        return props.theme.colors.secondary;
      case 'hidden':
        return 'transparent';
      default:
    }
  }};
`;

export const SummaryInfo = styled.View`
  flex: 1;
  display: flex;
`;

export const SummaryButtonContainer = styled.View`
  flex: 1;
`;

export const ContinueButton = styled(Button)`
  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
`;
