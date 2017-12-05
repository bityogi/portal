import axios from 'axios';
import _ from 'lodash';

import { GET_CAMPAIGN, GET_CAMPAIGNS } from './types';
import { getOrder } from './order';
import { getSellerStandings } from './seller';

export const getCampaign = (orgId, campaignId) => {
  console.log('getCampaign was just called for campaignId: ', campaignId)

  return (dispatch) => {
    dispatch({
      type: GET_CAMPAIGN,
      payload: {
        loading: true,
        data: []
      }
    })
    let url = `${process.env.REACT_APP_API_URL}/org/${orgId}/campaign/${campaignId}`


    axios.get(`${url}`)
      .then((response) => {
        console.log('getCampaign response: ', response.data)
        dispatch({
          type: GET_CAMPAIGN,
          payload: {
            loading: false,
            data: response.data
          }
        })

        const activeOrderStatus = ['New', 'Saved']
        let activeOrder = _.find(response.data.orders, (o) => {
          return activeOrderStatus.includes(o.status)
        })


        if (_.isEmpty(activeOrder)) {
          console.log('No active order was found')
          activeOrder = response.data.orders[0]
        }

        dispatch(getOrder(activeOrder._id))

        dispatch(getSellerStandings(campaignId))
      })
      .catch((error) => {
        console.log('Error')
        dispatch({
          type: GET_CAMPAIGN,
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

export const getCampaigns = (orgId) => {

  return (dispatch) => {
    dispatch({
      type: GET_CAMPAIGNS,
      payload: {
        loading: true,
        data: []
      }
    })
    let url = `${process.env.REACT_APP_API_URL}/org/${orgId}/campaign`


    axios.get(`${url}`)
      .then((response) => {
        console.log('getCampaigns response: ', response.data)

        dispatch({
          type: GET_CAMPAIGNS,
          payload: {
            loading: false,
            data: response.data
          }
        })
        const defaultCampaign = response.data[0]
        console.log('about to call getCampaign from campaigns with: ', defaultCampaign);
        dispatch(getCampaign(orgId, defaultCampaign._id))
      })
      .catch((error) => {
        console.log('Error')
        dispatch({
          type: GET_CAMPAIGNS,
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
