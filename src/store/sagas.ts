import { all, fork } from 'redux-saga/effects';
import RepositorySaga from './repositories/saga';

export default function* rootSaga() {
  yield all([fork(RepositorySaga)]);
}
