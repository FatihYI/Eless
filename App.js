import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginForm from './page/LoginForm';
import OverviewPage from './page/OverviewPage';
import RegistryForm from './page/RegistryForm';
import UserView from './page/UserView';
import ProductView from './page/ProductView';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="AppContainer">
        <Drawer.Screen
          name="OverviewPage"
          component={OverviewPage /*AppNavigator*/}
        />
        <Drawer.Screen name="LoginForm" component={LoginForm} />
        <Drawer.Screen name="RegistryForm" component={RegistryForm} />
        <Drawer.Screen name="UserView" component={UserView} />
        <Drawer.Screen name="Product" component={ProductView} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
