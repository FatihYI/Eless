import React from 'react';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './AppNavigator';

const App = () => {
  return (
    <>
      <AppContainer />
    </>
  );
};

const AppContainer = createAppContainer(AppNavigator);

export default App;
