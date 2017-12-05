import { put, takeEvery, all } from 'redux-saga/effects';
import { USER_LOGIN_SUCCESS, AUTH_LOGOUT } from 'admin-on-rest';

import { SIGN_IN, SIGN_OUT } from '../actions/types';

function* setUser(action) {
  console.log('SAGA - setUser');
  yield put({ type: SIGN_IN, payload: action.payload });
}

function* logoutUser(action) {
  console.log('SAGA - logoutUser');
  yield put({ type: SIGN_OUT, payload: '' });
}

export function* watchUserAuth() {
  yield all([
    takeEvery(USER_LOGIN_SUCCESS, setUser),
    takeEvery(AUTH_LOGOUT, logoutUser)
  ]);
}

// export function* watchUserLogout() {
//   yield takeEvery(AUTH_LOGOUT, logoutUser);
// }
