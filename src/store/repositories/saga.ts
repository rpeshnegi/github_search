import { takeLatest, put, call } from "redux-saga/effects";
import { GET_REPOSITORIES } from "./actionTypes";

import {
  getRepositoriesSuccess,
  getRepositoriesFail
} from "./actions";
import axios from "axios";
import { IRepository } from "../../types/IRepository";
import { IRepositoryRes } from "./types";

type IResponse = {
  config: any,
  data: IRepositoryRes,
  headers: any,
  request: any,
  status: number
  statusText: string
}

const getRepositories = (search: string) => axios.get<IResponse>(`https://api.github.com/search/repositories?q=${search}`);

function* onGetRepositories(payload: any) {
  try {
    const response: IResponse = yield call(getRepositories, payload.search);
    yield put(getRepositoriesSuccess({
      items: response.data.items,
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
