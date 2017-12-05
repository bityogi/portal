import axios from 'axios'

import { GET_ORDER } from './types'

const initialState = {
  loading: true,
  data: {}
}

export const getOrderDetails = (orderId) => {

}

export const initializeState = () => {
  return {
    type: GET_ORDER,
    payload: initialState
  }
}

export const createNewOrder = (newOrderInfo) => {
  return (dispatch, getState) => {

    const newOrder = {
      campaign: {
        _id: getState().campaign.data._id
      },
      orderDetails: [
        {
          seller:
          {
          _id: newOrderInfo.seller
          },
          products: [
            { product:
              {
                _id: newOrderInfo.product
              },
              quantity: newOrderInfo.quantity,
              price: newOrderInfo.price
          }
          ]
        }
      ],
      type: 'Primary'
    }

    const url = `${process.env.REACT_APP_API_URL}/order`

    axios.post(`${url}`, newOrder)
      .then((response) => {
        console.log('getOrders response: ', response.data);
        dispatch({
          type: GET_ORDER,
          payload: {
            loading: false,
            data: response.data
          }
        })
      })
      .catch((error) => {
        console.log('Error')
        dispatch({
          type: GET_ORDER,
          payload: {
            loading: false,
            error: true,
            errorMessage: error,
            organizations: []
          }
        })
      })

  }

}

export const getOrder = (orderId, refresh = true) => {

  return (dispatch) => {

    if (refresh) {
      dispatch({
        type: GET_ORDER,
        payload: initialState
      })
    }

    const url = process.env.REACT_APP_API_URL

    axios.get(`${url}/order/${orderId}`)
      .then((response) => {
        console.log('getOrders response: ', response.data);
        dispatch({
          type: GET_ORDER,
          payload: {
            loading: false,
            data: response.data
          }
        })
      })
      .catch((error) => {
        console.log('Error')
        dispatch({
          type: GET_ORDER,
          payload: {
            loading: false,
            error: true,
            errorMessage: error,
            organizations: []
          }
        })
      })
  }
}
