import React from 'react';
import {useTranslation} from 'react-i18next';
import {I18nManager, SafeAreaView, Text} from 'react-native';
import Home from './screens/Home';
import {defaultTheme} from './theme/defaultTheme';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {store} from './store';

function App(): JSX.Element {
  const theme = defaultTheme;
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Home />
      </PaperProvider>
    </Provider>
  );
}

export default App;
