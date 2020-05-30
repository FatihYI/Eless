import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import ProductView from './page/ProductView';
import OverviewPage from './page/OverviewPage';
import RegistryForm from './page/RegistryForm';
import LoginForm from './page/LoginForm';
import PlaceView from './page/PlaceView';

const AppNavigator = createStackNavigator({
  Home: {
    screen: PlaceView,
  },
  Product: {
    screen: ProductView,
  },
  Registry: {
    screen: RegistryForm,
  },
  Login: {
    screen: LoginForm,
  },
});

export default AppNavigator;
