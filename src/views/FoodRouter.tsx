/* eslint-disable react/no-unstable-nested-components */
import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {Food as IFood} from '../@types/Food';
import Food from './Food';
import FoodInfo from './FoodInfo';
import CartButton from '../components/CartButton';
import Cart from './Cart';

export type StackParamList = {
  Home: undefined;
  Cart: undefined;
  FoodInfo: IFood;
};

type Props = NativeStackScreenProps<StackParamList>;
const Stack = createNativeStackNavigator<StackParamList>();

function FoodRouter({navigation}: Props) {
  const theme = useContext(ThemeContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Food}
        options={{
          headerStyle: {
            backgroundColor: theme?.dark
              ? theme?.colors.background
              : theme?.colors.secondary,
          },
          headerRight: () => (
            <CartButton
              color={
                theme?.dark ? theme?.colors.text : theme?.colors.background
              }
              onPress={() => navigation.navigate('Cart')}
            />
          ),
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="FoodInfo"
        component={FoodInfo}
        options={{headerTransparent: true, headerTitle: ''}}
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

export default FoodRouter;
