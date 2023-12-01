import React, {useState, useEffect} from 'react';
import {Movie} from '../../@types/Movie';
import {Showtime} from '../../@types/Showtimes';
import {Theater} from '../../@types/Theater';
import Dropdown from '../../components/Dropdown';
import {
  buildStringFromDate,
  buildDateFromString,
} from '../../utils/dateConstructor';
import {
  Container,
  MovieInfoContainer,
  MoviePosterContainer,
  MoviePoster,
  ImageOverlay,
  Title,
  Subtitle,
  SubtitlesContainer,
  Description,
  MovieShowtimesContainer,
  SelectorsContainer,
  TheaterCard,
  TheaterCardHeader,
  TheaterSubtitle,
  TheaterTitle,
  TicketButton,
  ShowTimeCard,
  ShowTimeText,
  ShowTimesContainer,
  CollapseButton,
  CollapseButtonText,
  ShowtimesScrollView,
} from './styles';

// Mock data
import {dummyTheaters} from '../../utils/theaters';
import {dummyShowtimes} from '../../utils/showtimes';

// Navigation
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import Text from '../../components/Text';
import {StackParamList} from '../MoviesRouter';

type Props = NativeStackScreenProps<StackParamList>;

const MovieInfo = ({route, navigation}: Props) => {
  const movie: Movie = route.params as Movie;

  const [showInfo, setShowInfo] = useState(false);

  const [selectedTheater, setSelectedTheater] = useState<Theater>();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedShowtime, setSelectedShowtime] = useState<Showtime>();

  const [availableShowtimes, setAvailableShowtimes] = useState<Showtime[]>([]);
  const [availableDates, setAvailableDates] = useState<string[]>([]);

  const [openDateDropdown, setOpenDateDropdown] = useState<boolean>(false);
  const [openTheatersDropdown, setOpenTheatersDropdown] =
    useState<boolean>(false);

  useEffect(() => {
    setSelectedTheater(dummyTheaters[0]);
  }, []);

  useEffect(() => {
    let availableMovieDates = dummyShowtimes
      .filter(st => st.movieId === movie.id)
      .map(st => buildStringFromDate(st.date));
    availableMovieDates = Array.from(new Set(availableMovieDates));
    setAvailableDates(availableMovieDates);
    setSelectedDate(availableMovieDates[0]);
  }, [movie.id]);

  useEffect(() => {
    if (selectedTheater) {
      const theaterShowTimes: Showtime[] = dummyShowtimes
        .filter(
          (st: Showtime) =>
            st.theaterId === selectedTheater.id && st.movieId === movie.id,
        )
        .filter(
          (st: Showtime) =>
            st.date.getTime() === buildDateFromString(selectedDate).getTime(),
        );

      setAvailableShowtimes(theaterShowTimes);
    } else {
      setAvailableShowtimes([]);
    }
  }, [selectedTheater, selectedDate, movie.id]);

  const onSelectDate = (item: {title: string; value: string}): void => {
    setSelectedDate(item.value);
    setOpenDateDropdown(false);
  };

  const onSelectTheater = (item: {title: string; value: string}): void => {
    const theater = dummyTheaters.find(d => d.id === item.value);
    setSelectedTheater(theater);
    setOpenTheatersDropdown(false);
  };

  const onGetTicket = () => {
    if (selectedShowtime) {
      navigation.navigate('Seats', selectedShowtime);
    }
  };

  return (
    <Container>
      <MoviePosterContainer>
        <MoviePoster
          source={{
            uri: movie.picture,
          }}
        />
        <ImageOverlay />
      </MoviePosterContainer>

      <MovieInfoContainer>
        <Title>{movie.title}</Title>
        <SubtitlesContainer>
          <Subtitle>{movie.genre}</Subtitle>
          <Subtitle>{movie.length} min</Subtitle>
          <Subtitle>{movie.country}</Subtitle>
          <Subtitle>{movie.rating}</Subtitle>
        </SubtitlesContainer>

        <Description numberOfLines={showInfo ? 0 : 2}>
          {movie.summary}
        </Description>

        {showInfo && (
          <>
            <Description>Cast:</Description>
            {movie.cast.map((c, i) => (
              <Description key={i}>{c}</Description>
            ))}
          </>
        )}

        <CollapseButton onPress={() => setShowInfo(!showInfo)}>
          <CollapseButtonText>
            {showInfo ? 'Hide info' : 'More info'}
          </CollapseButtonText>
        </CollapseButton>
      </MovieInfoContainer>

      <MovieShowtimesContainer show={!showInfo}>
        {selectedTheater && selectedDate && (
          <SelectorsContainer>
            <Dropdown
              setSelectedValue={onSelectDate}
              open={openDateDropdown}
              setOpen={(value: boolean) => setOpenDateDropdown(value)}
              items={availableDates.map(d => ({
                value: d,
                title: d,
              }))}
              selectedValue={{value: selectedDate, title: selectedDate}}>
              {selectedDate}
            </Dropdown>
            <Dropdown
              setSelectedValue={onSelectTheater}
              open={openTheatersDropdown}
              setOpen={(value: boolean) => setOpenTheatersDropdown(value)}
              items={dummyTheaters.map((t: Theater) => ({
                value: t.id,
                title: t.name,
              }))}
              selectedValue={{
                value: selectedTheater.id,
                title: selectedTheater.name,
              }}>
              {selectedTheater.name ?? 'Select a theater'}
            </Dropdown>
          </SelectorsContainer>
        )}

        <TheaterCard>
          <TheaterCardHeader>
            <TheaterTitle>{selectedTheater?.name}</TheaterTitle>
            <TheaterTitle>{selectedTheater?.distance} km</TheaterTitle>
          </TheaterCardHeader>
          <TheaterSubtitle>{selectedTheater?.address}</TheaterSubtitle>
        </TheaterCard>

        <ShowtimesScrollView>
          <ShowTimesContainer>
            {availableShowtimes.length > 0 ? (
              <>
                {availableShowtimes.map((showtime: Showtime) => (
                  <ShowTimeCard
                    key={showtime.id}
                    onPress={() => setSelectedShowtime(showtime)}
                    selected={selectedShowtime?.id === showtime.id}>
                    <ShowTimeText
                      selected={selectedShowtime?.id === showtime.id}>
                      {showtime.hour}
                    </ShowTimeText>
                  </ShowTimeCard>
                ))}
              </>
            ) : (
              <Text color="text">No showtimes available.</Text>
            )}
          </ShowTimesContainer>
        </ShowtimesScrollView>

        <TicketButton
          onPress={onGetTicket}
          disabled={!selectedShowtime}
          color="primary">
          Get ticket
        </TicketButton>
      </MovieShowtimesContainer>
    </Container>
  );
};

export default MovieInfo;
