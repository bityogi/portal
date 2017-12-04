import { put, takeEvery } from 'redux-saga/effects';
import { USER_LOGIN_SUCCESS } from 'admin-on-rest';

import { SIGN_IN } from '../actions/types';

function* setUser(action) {
  yield put({ type: SIGN_IN, payload: action.payload });
}

export function* watchUserAuthSuccess() {
  yield takeEvery(USER_LOGIN_SUCCESS, setUser);
}
