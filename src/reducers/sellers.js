import { GET_SELLERS } from '../actions/types';

const initialState = {
  loading: false,
  data: {}
}

export default function sellersReducer (state = initialState, action) {

  if (action.type === GET_SELLERS) {
    console.log('GET_SELLERS --> payload: ', action.payload);
    return action.payload;
  } else {
    return state;
  }

}
