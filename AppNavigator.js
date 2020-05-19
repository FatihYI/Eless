import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import ProductView from './page/ProductView';
import OverviewPage from './page/OverviewPage';

const AppNavigator = createStackNavigator({
  Home: {
    screen: OverviewPage,
  },
  Product: {
    screen: ProductView,
  },
});

export default AppNavigator;
