import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import ProductView from './page/ProductView';
import OverviewPage from './page/OverviewPage';
import RegistryForm from './page/RegistryForm';
import LoginForm from './page/LoginForm';
import CityView from './page/CityView';
const AppNavigator = createStackNavigator({
  Home: {
    screen: OverviewPage,
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
  CityView: {
    screen: CityView,
  },
});

export default AppNavigator;
