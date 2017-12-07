import axios from '../util/axios'

import { GET_SELLERSTANDINGS, GET_SELLERS } from './types';

export const getSellerStandings = (campaignId) => {
  console.log('getSellerStanding was just called for campaignId: ', campaignId)

  return (dispatch) => {
    dispatch({
      type: GET_SELLERSTANDINGS,
      payload: {
        loading: true,
        data: []
      }
    })
    let url = `${process.env.REACT_APP_API_URL}/sharing/totals/${campaignId}`


    axios.get(`${url}`)
      .then((response) => {
        console.log('getSellerStandings response: ', response.data)
        dispatch({
          type: GET_SELLERSTANDINGS,
          payload: {
            loading: false,
            data: response.data
          }
        })

      })
      .catch((error) => {
        console.log('Error')
        dispatch({
          type: GET_SELLERSTANDINGS,
          payload: {
            loading: false,
            error: true,
            errorMessage: error,
            data: []
          }
        })
      })
  }
}

export const getRegisteredSellers = (orgId) => {
  return (dispatch) => {
    dispatch({
      type: GET_SELLERS,
      payload: {
        loading: true,
        data: {}
      }
    })
    const url = process.env.REACT_APP_API_URL

    axios.get(`${url}/sharing/listSellers/${orgId}`)
      .then((response) => {
        console.log('getSellers response: ', response.data);
        dispatch({
          type: GET_SELLERS,
          payload: {
            loading: false,
            data: response.data
          }
        })
      })
      .catch((error) => {
        console.log('Error')
        dispatch({
          type: GET_SELLERS,
          payload: {
            error: true,
            errorMessage: error,
            loading: false,
            organizations: []
          }
        })
      })
  }
}
