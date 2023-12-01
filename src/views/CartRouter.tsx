import React, {useContext} from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Cart from './Cart';
import {ThemeContext} from 'styled-components';

export type CartStackParamList = {
  Home: undefined;
};

type Props = NativeStackScreenProps<StackParamList>;
const Stack = createNativeStackNavigator<StackParamList>();

function FoodRouter() {
  const theme = useContext(ThemeContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Cart}
        options={{
          headerTitle: 'Cart',
          headerStyle: {
            backgroundColor: theme?.dark
              ? theme?.colors.background
              : theme?.colors.secondary,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default FoodRouter;
