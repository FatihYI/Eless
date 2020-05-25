import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import ProductView from './page/ProductView';
import OverviewPage from './page/OverviewPage';
import RegistryForm from './page/RegistryForm';
import LoginForm from './page/LoginForm';

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
});

export default AppNavigator;
