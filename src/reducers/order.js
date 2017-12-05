import { GET_ORDER } from '../actions/types';

const initialState = {
  loading: true,
  data: {}
}

export default function orderReducer (state = initialState, action) {

  if (action.type === GET_ORDER) {
    console.log('GET_ORDER --> payload: ', action.payload);
    return action.payload;
  } else {
    return state;
  }

}
