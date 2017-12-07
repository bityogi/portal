import axios from '../util/axios'

import { GET_ORGANIZATION } from './types';

export const getOrganization = (orgId) => {
  return (dispatch) => {
    dispatch({
      type: GET_ORGANIZATION,
      payload: {
        loading: true,
        data: {}
      }
    })
    const url = process.env.REACT_APP_API_URL

    axios.get(`${url}/orgs/${orgId}`)
      .then((response) => {
        console.log('getOrganizations response: ', response.data);
        dispatch({
          type: GET_ORGANIZATION,
          payload: {
            loading: false,
            data: response.data
          }
        })
      })
      .catch((error) => {
        console.log('Error')
        dispatch({
          type: GET_ORGANIZATION,
          payload: {
            loading: false,
            organizations: [],
            error: error
          }
        })
      })
  }
}
