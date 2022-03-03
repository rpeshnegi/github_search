import {
  GET_REPOSITORIES,
  GET_REPOSITORIES_SUCCESS,
  GET_REPOSITORIES_FAIL,
} from '../actionTypes';
import { IRepositoryRes } from './types';

export const getRepositories = (search: string) => ({
  type: GET_REPOSITORIES,
  search,
});

export const getRepositoriesSuccess = (data: IRepositoryRes) => ({
  type: GET_REPOSITORIES_SUCCESS,
  payload: data,
});

export const getRepositoriesFail = (error: any) => ({
  type: GET_REPOSITORIES_FAIL,
  payload: error,
});
