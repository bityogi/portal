import { GET_CAMPAIGNS } from '../actions/types';

const initialState = {
  loading: true,
  data: []
}
export default function campaignsReducer (state = initialState, action) {

  if (action.type === GET_CAMPAIGNS) {
    console.log('GET_CAMPAIGNS --> payload: ', action.payload);
    return action.payload;
  } else {
    return state;
  }

}
