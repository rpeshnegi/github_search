import {
  GET_REPOSITORIES,
  GET_REPOSITORIES_SUCCESS,
  GET_REPOSITORIES_FAIL
} from "./actionTypes";
import { IRepository } from '../../types/IRepository'
import { IRepositoryRes } from "./types";

export const getRepositories = (search: string) => {
  return {
    type: GET_REPOSITORIES,
    search
  };
};

export const getRepositoriesSuccess = (data: IRepositoryRes) => {
  return {
    type: GET_REPOSITORIES_SUCCESS,
    payload: data,
  };
};

export const getRepositoriesFail = (error: any) => {
  return {
    type: GET_REPOSITORIES_FAIL,
    payload: error,
  };
};
