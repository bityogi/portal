import { GET_CAMPAIGN } from '../actions/types';

const initialState = {
  loading: true,
  data: []
}
export default function campaignsReducer (state = initialState, action) {

  if (action.type === GET_CAMPAIGN) {
    console.log('GET_CAMPAIGN --> payload: ', action.payload);
    return action.payload;
  } else {
    return state;
  }

}
