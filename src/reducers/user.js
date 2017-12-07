import { SIGN_IN, SIGN_OUT } from '../actions/types';

const initialState = {}

export default function userReducer (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      console.log('SIGN_IN action! payload = ', action.payload);
      return action.payload;
      break;
    case SIGN_OUT:
      console.log('SIGN_OUT action! payload = ', action.payload);
      return action.payload;
      break;
    default:
      console.log('user reducer: DEFAULT_STATE. payload = ', state);
      return state;
  }

}
