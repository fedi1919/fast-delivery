import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
// eslint-disable-next-line max-len
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => (
  <RestaurantStack.Navigator
    headerMode="none"
    screenOptions={{
      ...TransitionPresets.ModalPresentationIOS,
    }}
  >
    <RestaurantStack.Screen name="Restaurants" component={RestaurantsScreen} />
    <RestaurantStack.Screen
      name="RestaurantDetail"
      component={RestaurantDetailScreen}
    />
  </RestaurantStack.Navigator>
);
