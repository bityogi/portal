import axios from 'axios';

import { GET_CHAIR_DEFAULT_INFO } from './types';

export const getChairHomeInfo = (orgId) => {
  return (dispatch) => {
    dispatch({
      type: GET_CHAIR_DEFAULT_INFO,
      payload: {
        loading: true,
        data: {}
      }
    })
    const url = process.env.REACT_APP_API_URL

    axios.get(`${url}/orgs/${orgId}`)
      .then((response) => {
        console.log('getChairHomeInfo response: ', response.data);
        dispatch({
          type: GET_CHAIR_DEFAULT_INFO,
          payload: {
            loading: false,
            data: response.data
          }
        })
      })
      .catch((error) => {
        console.log('Error')
        dispatch({
          type: GET_CHAIR_DEFAULT_INFO,
          payload: {
            loading: false,
            organizations: []
          }
        })
      })
  }
}
