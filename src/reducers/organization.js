import { GET_ORGANIZATION } from '../actions/types';

const initialState = {
  loading: true,
  data: {}
}

export default function organizationsReducer (state = initialState, action) {

  if (action.type === GET_ORGANIZATION) {
    console.log('GET_ORGANIZATION --> payload: ', action.payload);
    return action.payload;
  } else {
    return state;
  }

}
