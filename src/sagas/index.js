import { all } from 'redux-saga/effects';

import { watchUserAuth } from './user';

export default [
  watchUserAuth
];

// export default customSagas;
// export default function* customSagas() {
//   yield all([
//     watchUserAuthSuccess(),
//     watchUserLogout(),
//   ])
// };
