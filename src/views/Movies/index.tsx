import React from 'react';
import {
  Container,
  ScrollContainer,
  FeaturedMovieCard,
  FeaturedMovieImg,
  FeaturedMovieTitle,
  FeaturedMovieButton,
  MoviesContainer,
  ImageOverlay,
} from './styles';
import MovieList from './components/MovieList';
import {mockMovies} from '../../utils/movies';
import {Movie} from '../../@types/Movie';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../MoviesRouter';

type Props = NativeStackScreenProps<StackParamList>;

const Movies = ({navigation}: Props) => {
  const featuredMovie: Movie = mockMovies.find(
    (movie: Movie) => movie.featured,
  ) as Movie;

  return (
    <Container>
      <ScrollContainer>
        <FeaturedMovieCard>
          <FeaturedMovieImg
            source={{
              uri: featuredMovie.picture,
            }}
          />
          <ImageOverlay />
          <FeaturedMovieTitle>{featuredMovie.title}</FeaturedMovieTitle>
          <FeaturedMovieButton
            color="primary"
            onPress={() => navigation.navigate('Movie', featuredMovie)}>
            Show times
          </FeaturedMovieButton>
        </FeaturedMovieCard>
        <MoviesContainer>
          <MovieList title="🎥 Now playing" movies={mockMovies} />
          <MovieList title="🔥 Trending" movies={mockMovies} />
          <MovieList title="🍿 Some other category" movies={mockMovies} />
        </MoviesContainer>
      </ScrollContainer>
    </Container>
  );
};

export default Movies;
