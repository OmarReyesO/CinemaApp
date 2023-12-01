import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {Modal, View} from 'react-native';
import {CartContext} from '../../context/CartContext';
import Text from '../../components/Text';
import ItemCard from '../../components/ItemCard';
import Button from '../../components/Button';
import {
  Container,
  ContainerFooter,
  ContainerHeader,
  ContainerSummary,
  SummaryText,
  CardScrollContainer,
  EmptyCart,
  ModalContainer,
  ModalHeader,
  TicketCard,
  TicketImg,
  TicketInfo,
  Info,
  QRImage,
  ModalFooter,
  FooterText,
  ModalHeaderBtn,
  ModalHeaderTxt,
  HeaderTxt,
  HeaderBtn,
  FoodCard,
  SeatsInfo,
} from './styles';
import {Cart as CartType, SaleItem} from '../../@types/Sale';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TabParamList} from '../index.routes';
import {dummyTheaters} from '../../utils/theaters';

type Props = NativeStackScreenProps<TabParamList>;

const Cart = ({navigation}: Props) => {
  const scrollRef = useRef(null);
  const {items, cartTotal, clearCart, removeItem} = useContext(
    CartContext,
  ) as CartType;

  const [checkedOut, setCheckedOut] = useState<boolean>(false);
  const [openCheckoutModal, setOpenCheckoutModal] = useState<boolean>(false);
  const [cartMovieTicket, setCartMovieTicket] = useState<SaleItem>();

  const onDismiss = useCallback(
    (item: SaleItem) => {
      removeItem(item);
    },
    [removeItem],
  );

  const onCheckout = () => {
    setOpenCheckoutModal(true);
  };

  const onDismissModal = () => {
    setOpenCheckoutModal(false);
    setCheckedOut(true);
  };

  useEffect(() => {
    const movieTicketInCart = items.find(i => i.type === 'ticket');
    setCartMovieTicket(movieTicketInCart);
  }, [items]);

  useEffect(() => {
    if (checkedOut) {
      clearCart();
      navigation.navigate('Movies', {screen: 'Home'});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedOut]);

  return (
    <Container>
      <Modal animationType="slide" visible={openCheckoutModal}>
        <ModalContainer>
          <ModalHeader>
            <ModalHeaderBtn onPress={onDismissModal}>
              <HeaderBtn fontSize="large">X</HeaderBtn>
            </ModalHeaderBtn>
            <ModalHeaderTxt>
              <HeaderTxt fontSize="large">Thanks for your purchase!</HeaderTxt>
            </ModalHeaderTxt>
          </ModalHeader>

          {cartMovieTicket && cartMovieTicket.showtime ? (
            <TicketCard>
              <TicketImg
                source={{
                  uri: cartMovieTicket.image,
                }}
              />
              <TicketInfo>
                <Info>
                  <Text
                    color="secondary"
                    fontSize="large"
                    fontWeight="extraBold">
                    Theater:
                  </Text>
                  <Text>
                    {
                      dummyTheaters.find(
                        t => t.id === cartMovieTicket?.showtime?.theaterId,
                      )?.name
                    }
                  </Text>
                </Info>

                <Info>
                  <Text
                    color="secondary"
                    fontSize="large"
                    fontWeight="extraBold">
                    Date:
                  </Text>
                  <Text>
                    {cartMovieTicket.showtime.date.toISOString().split('-')[1] +
                      '-' +
                      cartMovieTicket.showtime.date
                        .toISOString()
                        .split('-')[2]
                        .split('T')[0] +
                      '-' +
                      cartMovieTicket.showtime.date.toISOString().split('-')[0]}
                  </Text>
                </Info>

                <Info>
                  <Text
                    color="secondary"
                    fontSize="large"
                    fontWeight="extraBold">
                    Time:
                  </Text>
                  <Text>{cartMovieTicket.showtime.hour}</Text>
                </Info>

                <Info>
                  <Text
                    color="secondary"
                    fontSize="large"
                    fontWeight="extraBold">
                    Seats:
                  </Text>
                  <SeatsInfo>
                    {cartMovieTicket.seats?.map((seat, i) => (
                      <Text key={i}>{`${seat}${
                        i !==
                        (cartMovieTicket.seats &&
                          cartMovieTicket?.seats?.length - 1)
                          ? ','
                          : ''
                      }`}</Text>
                    ))}
                  </SeatsInfo>
                </Info>
                <Info>
                  <QRImage source={require('../../assets/imgs/qr.png')} />
                </Info>
              </TicketInfo>
            </TicketCard>
          ) : (
            <FoodCard>
              <Text fontSize="h3">Enjoy your foods 🍿</Text>
              <QRImage source={require('../../assets/imgs/qr.png')} />
            </FoodCard>
          )}

          <ModalFooter>
            <FooterText>
              Use this QR code to enter the cinema and collect purchased foods
              and drinks.
            </FooterText>
            <Button color="secondary" onPress={onDismissModal}>
              Done
            </Button>
          </ModalFooter>
        </ModalContainer>
      </Modal>

      <ContainerHeader>
        <Text fontSize="large">
          Items in cart:{' '}
          <Text color="secondary" fontSize="large">
            {items.length}
          </Text>
        </Text>
        <Text fontSize="large" color="secondary" onPress={() => clearCart()}>
          Clear cart
        </Text>
      </ContainerHeader>

      <CardScrollContainer ref={scrollRef}>
        {items.length > 0 ? (
          <>
            {items.map((item, i) => (
              <ItemCard
                key={i}
                item={item}
                onDismiss={onDismiss}
                simultaneousHandlers={scrollRef}
              />
            ))}
          </>
        ) : (
          <EmptyCart>
            <Text>{'Empty cart :('}</Text>
          </EmptyCart>
        )}
      </CardScrollContainer>

      <ContainerSummary>
        <Text>Total: ${cartTotal.toFixed(2)}</Text>
        <SummaryText fontSize="small" fontWeight="light">
          Some items may be delivered in packaging that differs from what is
          displayed in the menu.
        </SummaryText>
      </ContainerSummary>

      <ContainerFooter>
        <Button
          color="primary"
          disabled={items.length === 0}
          onPress={onCheckout}>
          Checkout
        </Button>
      </ContainerFooter>
    </Container>
  );
};

export default Cart;
