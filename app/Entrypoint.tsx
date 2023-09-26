import React from 'react';
import {useTranslation} from 'react-i18next';
import {I18nManager, SafeAreaView, Text} from 'react-native';
import Home from './screens/Home';
import {defaultTheme} from './theme/defaultTheme';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {persistor, store} from './store';
import {PersistGate} from 'redux-persist/es/integration/react';

function App(): JSX.Element {
  const theme = defaultTheme;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <Home />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
