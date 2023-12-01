import React, {useContext} from 'react';
import {
  DefaultTheme,
  ThemeContext,
  DefaultTheme as ThemeProps,
} from 'styled-components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Movies from './MoviesRouter';
import Food from './FoodRouter';
import Settings from './Settings';

// Tab Icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type MoviesProps = {
  screen?: string;
};

export type TabParamList = {
  Movies: MoviesProps;
  Food: ThemeProps;
  Settings: undefined;
  Cart: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

function Router() {
  const theme = useContext(ThemeContext) as DefaultTheme;

  return (
    <Tab.Navigator
      initialRouteName="Movies"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderBlockColor: theme.colors.background,
        },
        tabBarActiveTintColor: theme.colors.secondary,
      }}>
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          headerShown: false,
          headerTransparent: true,
          headerTitle: '',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <Icon name="movie" size={30} color={theme.colors.primary} />
          ),
        }}
      />
      <Tab.Screen
        initialParams={{theme: theme}}
        name="Food"
        component={Food}
        options={{
          headerShown: false,
          headerTransparent: true,
          headerTitle: '',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <Icon name="popcorn" size={30} color={theme.colors.primary} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          headerTransparent: true,
          headerTitle: '',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <Icon name="tools" size={30} color={theme.colors.primary} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Router;
