/* eslint-disable no-param-reassign */
import {
  GET_REPOSITORIES,
  GET_REPOSITORIES_SUCCESS,
  GET_REPOSITORIES_FAIL,
} from '../actionTypes';
import { IRepositoryActions, RepositoriesState } from './types';

const initialState: RepositoriesState = {
  loading: false,
  items: [],
  incomplete_results: true,
  total_count: 0,
  error: {
    message: '',
  },
};

// eslint-disable-next-line default-param-last
const RepositorytReducer = (state = initialState, action: IRepositoryActions) => {
  switch (action.type) {
    case GET_REPOSITORIES:
      state = { ...state, loading: true };
      break;
    case GET_REPOSITORIES_SUCCESS:
      state = { ...state, ...action.payload, loading: false };
      break;
    case GET_REPOSITORIES_FAIL:
      state = {
        ...state,
        error: action.payload,
        loading: false,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default RepositorytReducer;
