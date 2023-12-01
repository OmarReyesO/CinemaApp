import {PressableProps, ViewProps} from 'react-native';
import styled from 'styled-components/native';
import Text from '../Text';

interface DropdownItemProps {
  value: string;
  title: string;
}

export interface DropdownProps extends PressableProps {
  disabled?: boolean;
  items: DropdownItemProps[];
  children?: any;
  open: boolean;
  selectedValue: DropdownItemProps;
  setSelectedValue: (item: DropdownItemProps) => void;
  setOpen: (open: boolean) => void;
}

interface DropdownBoxProps {
  disabled?: boolean;
}

interface ModalItemContainerProps extends PressableProps {
  selected: boolean;
}

export const DropdownBox = styled.Pressable<DropdownBoxProps>`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  border: 1.5px solid ${props => props.theme.colors.text};
  border-radius: 10px;
`;

export const DropdownText = styled(Text)`
  color: ${props => props.theme.colors.text};
  margin: auto;
`;

export const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-content: center;
`;

export const ModalContent = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 20px;
  background-color: ${props => props.theme.colors.background};
  border-radius: 20px;
  padding: 10px;
`;

export const ModalItem = styled(Text)`
  color: ${props => props.theme.colors.text};
`;

export const ModalItemContainer = styled.Pressable<ModalItemContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding: 10px;
  border-radius: 5px;
  background-color: ${props => props.selected && 'rgba(251, 208, 91, 0.7)'};
`;
