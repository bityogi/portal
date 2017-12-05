import { GET_SELLERSTANDINGS } from '../actions/types';

const initialState = {
  loading: true,
  data: []
}
export default function sellerStandingsReducer (state = initialState, action) {

  if (action.type === GET_SELLERSTANDINGS) {
    console.log('GET_SELLERSTANDINGS --> payload: ', action.payload);
    return action.payload;
  } else {
    return state;
  }

}
