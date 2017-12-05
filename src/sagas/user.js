import { put, takeEvery, all } from 'redux-saga/effects';
import { USER_LOGIN_SUCCESS, showNotification } from 'admin-on-rest';

import { SIGN_IN, SIGN_OUT } from '../actions/types';

function* setUser(action) {
  console.log('SAGA - setUser');
  yield put({ type: SIGN_IN, payload: action.payload });
}

function* logoutNotification(action) {
  console.log('SAGA - logoutUser');
  yield put(showNotification('User logged out'));
}


export function* watchUserAuth() {
  yield all([
    takeEvery(USER_LOGIN_SUCCESS, setUser),
    takeEvery(SIGN_OUT, logoutNotification)
  ])
}


// export function* watchUserLogout() {
//   yield takeEvery(AUTH_LOGOUT, logoutUser);
// }
