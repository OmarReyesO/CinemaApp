import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../../components/Text';

type Props = {
  active: boolean;
};

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  padding: 70px;
`;

export const ThemeSelector = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.primary};
`;

export const ThemeBox = styled.Pressable<Props>`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background-color: ${props =>
    props.active ? props.theme.colors.primary : 'transparent'};
`;

export const ThemeIcon = styled(Icon)<Props>`
  color: ${props =>
    props.active
      ? props.theme.dark
        ? props.theme.colors.secondaryBackground
        : props.theme.colors.secondary
      : props.theme.colors.text};
  font-size: 35px;
`;

export const ThemeText = styled(Text)<Props>`
  color: ${props =>
    props.active
      ? props.theme.dark
        ? props.theme.colors.secondaryBackground
        : props.theme.colors.secondary
      : props.theme.colors.text};
`;
