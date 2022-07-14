import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import Route from './src/route/route';
import Swap from './src/screen/swap';

const App = () => {
  return (
    <Provider store={store}>
      <Route />

    </Provider>
  );
};

export default App;
