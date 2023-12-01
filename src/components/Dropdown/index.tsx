import React from 'react';
import {Modal} from 'react-native';
import {
  DropdownProps,
  DropdownBox,
  DropdownText,
  ModalContainer,
  ModalContent,
  ModalItemContainer,
  ModalItem,
} from './styles';
const Dropdown = ({
  disabled,
  items,
  children,
  open,
  setOpen,
  selectedValue,
  setSelectedValue,
}: DropdownProps) => {
  const enabled = !disabled;
  return (
    <DropdownBox
      disabled={!enabled}
      onPress={enabled ? () => setOpen(true) : () => {}}>
      <Modal animationType="fade" transparent={true} visible={open}>
        <ModalContainer>
          <ModalContent>
            {items.map(i => (
              <ModalItemContainer
                key={i.value}
                onPress={() => setSelectedValue(i)}
                selected={selectedValue?.value === i.value}>
                <ModalItem>{i.title}</ModalItem>
              </ModalItemContainer>
            ))}
          </ModalContent>
        </ModalContainer>
      </Modal>
      <DropdownText fontSize={'small'}>{children}</DropdownText>
      <DropdownText fontSize={'small'}>&#9660;</DropdownText>
    </DropdownBox>
  );
};
export default Dropdown;
