import styled from 'styled-components/native';
import Text from '../../components/Text';
import {ScrollView} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  display: flex;
  background-color: ${props => props.theme.colors.background};
  padding: 10px 20px;
`;

export const ContainerHeader = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardScrollContainer = styled(ScrollView)`
  flex: 6;
`;

export const CardContainer = styled.ScrollView`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: red;
`;

export const ContainerSummary = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ContainerFooter = styled.View`
  flex: 1;
`;

export const SummaryText = styled(Text)`
  text-align: center;
  color: #757575;
`;

export const EmptyCart = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 400px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  padding: 80px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
`;

export const ModalHeader = styled.View`
  flex: 2;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ModalHeaderBtn = styled.Pressable`
  margin: auto;
`;

export const ModalHeaderTxt = styled.View`
  flex: 10;
  margin: auto;
`;

export const HeaderBtn = styled(Text).attrs({
  fontSize: 'large',
  fontWeight: 'extraBold',
  color: 'text',
})`
  font-weight: 500;
`;

export const HeaderTxt = styled(Text).attrs({
  fontSize: 'large',
  color: 'text',
})`
  text-align: center;
`;

export const TicketCard = styled.View`
  flex: 20;
  display: flex;
  width: 100%;
  border-radius: 30px;
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.text};
`;

export const TicketImg = styled.Image`
  flex: 6;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const TicketInfo = styled.View`
  flex: 4;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 10px;
  align-items: center;
  padding: 15px 0;
`;

export const Info = styled.View`
  flex-basis: 48%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SeatsInfo = styled.View`
  display: flex;
  flex-direction: row;
`;

export const QRImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const ModalFooter = styled.View`
  flex: 3;
  width: 100%;
  padding: 10px 0;
  display: flex;
  gap: 15px;
`;

export const FooterText = styled(Text).attrs({})`
  text-align: center;
  padding: 5px 0;
`;

export const FoodCard = styled.View`
  flex: 4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 10px 10px 20px #d4d4d4;
`;
