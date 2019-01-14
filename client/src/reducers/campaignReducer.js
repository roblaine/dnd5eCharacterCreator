import {
  FETCH_CAMPAIGN,
  JOIN_CAMPAIGN,
  LEAVE_CAMPAIGN,
  GET_ERRORS
} from "../actions/types";

const initialState = {
  campaign: {},
  inCampaign: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_CAMPAIGN:
      return {
        ...state,
        campaign: action.payload.data.campaignDetails.campaign,
        inCampaign: action.payload.data.campaignDetails.inCampaign
      }
    case JOIN_CAMPAIGN:
      return {
        ...state,
        campaign: action.payload.data.campaignDetails.campaign,
        inCampaign: true
      }
    case LEAVE_CAMPAIGN:
      // Leave the campaign with the character
      return {
        ...state,
        inCampaign: false
      }
    default:
      return state;
  }
}
