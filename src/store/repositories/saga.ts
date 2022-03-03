import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { GET_REPOSITORIES } from '../actionTypes';
import {
  getRepositoriesSuccess,
  getRepositoriesFail,
} from './actions';
import { IResponse } from './types';
import { IRepository } from '../../types/IRepository.d';

const getRepositories = (search: string) => axios.get<IResponse>(`https://api.github.com/search/repositories?q=${search}`);

function* onGetRepositories(payload: any) {
  try {
    const response: IResponse = yield call(getRepositories, payload.search);
    const items: IRepository[] = response.data?.items.map((item: any) => ({
      id: item.id,
      name: item.name,
      stargazers_count: item.stargazers_count,
      watchers_count: item.watchers_count,
      html_url: item.html_url,
    } as IRepository)) || [];

    yield put(getRepositoriesSuccess({
      items,
      incomplete_results: response.data.incomplete_results,
      total_count: response.data.total_count,
    }));
  } catch (error: any) {
    yield put(getRepositoriesFail(error.response));
  }
}

function* RepositorySaga() {
  yield takeLatest(GET_REPOSITORIES, onGetRepositories);
}

export default RepositorySaga;
