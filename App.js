import React from 'react';
import {createAppContainer} from 'react-navigation';
import {Button, View} from 'react-native';
import AppNavigator from './AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginForm from './page/LoginForm';
import CityView from './page/CityView';
import OverviewPage from './page/OverviewPage';
import RegistryForm from './page/RegistryForm';

function OverviewScreen({navigation}) {
  return <AppContainer />;
}

function LoginScreen({navigation}) {
  return <LoginForm />;
}

function RegistryScreen({navigation}) {
  return <RegistryForm />;
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    //<AppContainer>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="AppContainer">
        <Drawer.Screen
          name="OverviewPage"
          component={OverviewScreen /*AppNavigator*/}
        />
        <Drawer.Screen name="LoginForm" component={LoginScreen} />
        <Drawer.Screen name="RegistryForm" component={RegistryScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    //</AppContainer>
  );
}

/*const App = () => {
  return (
    <AppContainer />
  );
};*/

const AppContainer = createAppContainer(AppNavigator);

//export default App;
