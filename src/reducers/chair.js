import { GET_CHAIR_DEFAULT_INFO } from '../actions/types';

const initialState = {
  loading: false,
  data: {}
}
export default function chairHomeReducer (state = initialState, action) {

  if (action.type === GET_CHAIR_DEFAULT_INFO) {
    console.log('GET_CHAIR_DEFAULT_INFO --> payload: ', action.payload);
    return action.payload;
  } else {
    return state;
  }

}
