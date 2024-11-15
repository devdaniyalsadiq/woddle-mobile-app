import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import {Provider} from 'react-redux';
import StackNavigation from './src/navigations/stack';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StackNavigation />
      </PersistGate>
    </Provider>
  );
}

export default App;
