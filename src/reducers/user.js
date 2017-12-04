import { SIGN_IN, SIGN_OUT } from '../actions/types';

const initialState = {
  loading : true,
  data: {}
}

export default function userReducer (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return action.payload;
      break;
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }

}
