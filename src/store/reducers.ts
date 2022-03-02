import { combineReducers } from 'redux';

import RepositorytReducer from './repositories/reducer';

const rootReducer = combineReducers({
  RepositorytReducer,
});

export default rootReducer;
