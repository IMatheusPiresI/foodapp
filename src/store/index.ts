import {combineReducers, createStore} from 'redux';

import {persistStore, persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {foodCartReducer} from './ducks/foodCart';

const persistConfig = {
  key: 'cartFood',
  storage: AsyncStorage,
};

const rootReducers = combineReducers({
  foodCartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor};
