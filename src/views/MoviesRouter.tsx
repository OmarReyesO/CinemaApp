import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Movies from './Movies';
import Cart from './Cart';
import MovieInfo from './MovieInfo';
import {Movie} from '../@types/Movie';
import {Showtime} from '../@types/Showtimes';
import SeatSelection from './SeatSelection';
import {ThemeContext} from 'styled-components';

export type StackParamList = {
  Home: undefined;
  Movie: Movie;
  Seats: Showtime;
  Cart: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

function Home() {
  const theme = useContext(ThemeContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Movies}
        options={{headerTransparent: true, headerTitle: ''}}
      />
      <Stack.Screen
        name="Movie"
        component={MovieInfo}
        options={{headerTransparent: true, headerTitle: ''}}
      />
      <Stack.Screen
        name="Seats"
        component={SeatSelection}
        options={{
          headerTitle: 'Choose seats',
          headerTintColor: theme?.colors.text,
          headerStyle: {
            backgroundColor: theme?.colors.background,
          },
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerTitle: 'Cart',
          headerStyle: {
            backgroundColor: theme?.dark
              ? theme?.colors.background
              : theme?.colors.secondary,
          },
          headerTintColor: theme?.colors.text,
        }}
      />
    </Stack.Navigator>
  );
}

export default Home;
