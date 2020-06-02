import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import ProductView from './page/ProductView';
import OverviewPage from './page/OverviewPage';
import RegistryForm from './page/RegistryForm';
import LoginForm from './page/LoginForm';
import CityView from './page/CityView';
import ProductRegistryImage from './page/ProductRegistryImage';
import ProductRegistryInformation from './page/ProductRegistryInformation';
import ProductRegistryDescription from './page/ProductRegistryDescription';
import ProductRegistryOverview from './page/ProductRegistryOverview';
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
  ProductRegistryImage: {
    screen: ProductRegistryImage,
  },
  ProductRegistryInformation: {
    screen: ProductRegistryInformation,
  },
  ProductRegistryDescription: {
    screen: ProductRegistryDescription,
  },
  ProductRegistryOverview: {
    screen: ProductRegistryOverview,
  },
});

export default AppNavigator;
