import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AppNavigator from './AppNavigator';
import OverviewPage from './page/OverviewPage';
import LoginForm from './page/LoginForm';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="OverviewPage" component={AppContainer} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
