import React, {useEffect, useState, useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import {seats} from '../../utils/seats';
import Text from '../../components/Text';

//Navigation
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TabParamList} from '../index.routes';
import {Showtime} from '../../@types/Showtimes';
import {
  Container,
  ScreenContainer,
  SeatBox,
  SeatRow,
  RowLetter,
  SeatText,
  SeatsContainer,
  SeatsInfoContainer,
  SeatInfo,
  SeatInfoColor,
  SummaryContainer,
  SummaryInfo,
  SummaryButtonContainer,
  ScreenImg,
  ContinueButton,
} from './styles';
import {Seat} from '../../@types/Seat';
import {Cart, SaleItem} from '../../@types/Sale';
import {mockMovies} from '../../utils/movies';

type Props = NativeStackScreenProps<TabParamList>;

type OrganizedSeatProps = {
  [row: string]: Seat[];
};

const organizedSeatData: OrganizedSeatProps = seats.reduce((acc, seat) => {
  if (!acc[seat.row]) {
    acc[seat.row] = [];
  }
  acc[seat.row].push(seat);
  return acc;
}, {} as OrganizedSeatProps);

const TICKET_PRICE = 11.75;

const SeatSelection = ({route, navigation}: Props) => {
  const {saveItem} = useContext(CartContext) as Cart;

  const showtime: Showtime = route.params as Showtime;

  const [theaterSeats, setTheaterSeats] = useState<OrganizedSeatProps>();
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  const toggleSelectSeat = (seat: Seat) => {
    if (seat.status !== 'unavailable') {
      const isSeatSelected = selectedSeats.find(s => s.id === seat.id);
      if (isSeatSelected) {
        setSelectedSeats(prev => prev.filter(s => s.id !== seat.id));
      } else {
        setSelectedSeats([...selectedSeats, seat]);
      }
    }
  };

  const handleAddTicket = () => {
    const movieInfo = mockMovies.find(m => m.id === showtime.movieId);

    const ticketItemSale: SaleItem = {
      id: 's' + showtime.id,
      name: 'Movie Ticket',
      price: TICKET_PRICE,
      qty: selectedSeats.length,
      type: 'ticket',
      showtime: showtime,
      movie: movieInfo?.title,
      seats: selectedSeats.map(ss => ss.id),
      image: movieInfo?.picture,
    };

    saveItem(ticketItemSale);
    navigation.navigate('Cart');
  };

  useEffect(() => {
    setTheaterSeats(organizedSeatData);
  }, []);

  return (
    <Container>
      <ScreenContainer>
        {/* <ScreenImg source={require('../../assets/imgs/screen.png')} /> */}
      </ScreenContainer>
      {theaterSeats && (
        <SeatsContainer>
          {Object.keys(theaterSeats).map(row => (
            <SeatRow>
              <RowLetter>{row}</RowLetter>
              {theaterSeats[row].map(seat => (
                <SeatBox
                  key={seat.id}
                  status={
                    selectedSeats.find(s => s.id === seat.id)
                      ? 'selected'
                      : seat.status
                  }
                  onPress={() => toggleSelectSeat(seat)}>
                  {seat.status !== 'hidden' && (
                    <SeatText
                      color={
                        selectedSeats.find(s => s.id === seat.id)
                          ? 'background'
                          : 'text'
                      }>
                      {seat.number}
                    </SeatText>
                  )}
                </SeatBox>
              ))}
            </SeatRow>
          ))}
        </SeatsContainer>
      )}
      <SeatsInfoContainer>
        <SeatInfo>
          <SeatInfoColor status="selected" />
          <Text fontSize="small">Selected</Text>
        </SeatInfo>
        <SeatInfo>
          <SeatInfoColor status="available" />
          <Text fontSize="small">Available</Text>
        </SeatInfo>
        <SeatInfo>
          <SeatInfoColor status="unavailable" />
          <Text fontSize="small">Reserved</Text>
        </SeatInfo>
      </SeatsInfoContainer>
      <SummaryContainer>
        <SummaryInfo>
          <Text fontSize="h4" fontWeight="extraBold">
            ${(selectedSeats.length * TICKET_PRICE).toFixed(2)}
          </Text>
          <Text fontSize="small">{selectedSeats.length} ticket(s)</Text>
        </SummaryInfo>
        <SummaryButtonContainer>
          <ContinueButton
            color="secondary"
            disabled={selectedSeats.length < 1}
            onPress={() => handleAddTicket()}>
            Continue
          </ContinueButton>
        </SummaryButtonContainer>
      </SummaryContainer>
    </Container>
  );
};

export default SeatSelection;
