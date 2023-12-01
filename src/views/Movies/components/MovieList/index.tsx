import React from 'react';
import {Movie} from '../../../../@types/Movie';
import {
  Container,
  MoviesContainer,
  MovieCard,
  MovieImg,
  MovieTitle,
  Title,
} from './styles';
import {Pressable} from 'react-native';

// Navigation
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../../index.routes';

interface MovieListProps {
  title: string;
  movies: Movie[];
}

const MovieList = ({title, movies}: MovieListProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  return (
    <Container>
      <Title>{title}</Title>
      <MoviesContainer horizontal>
        {movies.map((movie: Movie) => (
          <Pressable
            key={movie.id}
            onPress={() => navigation.navigate('Movie', movie)}>
            <MovieCard>
              <MovieImg
                source={{
                  uri: movie.picture,
                }}
              />
              <MovieTitle>{movie.title}</MovieTitle>
            </MovieCard>
          </Pressable>
        ))}
      </MoviesContainer>
    </Container>
  );
};

export default MovieList;
