import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loading'],
  debug: true, //to get useful logging
};
const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

const persistedReducer = persistReducer(config, rootReducer);
const enhancers = [...middleware];
const persistConfig: any = {enhancers};
export const store = configureStore({
  reducer: persistedReducer,
  middleware: enhancers,
});
sagaMiddleware.run(sagas);
export const persistor = persistStore(store, persistConfig);
