import {combineReducers, createStore} from 'redux';

import {foodCartReducer} from './ducks/foodCart';

const rootReducers = combineReducers({
  foodCartReducer,
});

export const store = createStore(rootReducers);
