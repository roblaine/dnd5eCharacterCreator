import {
  FETCH_CAMPAIGN,
  JOIN_CAMPAIGN,
  LEAVE_CAMPAIGN
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
        campaign: action.payload.data.campaign,
        inCampaign: action.payload.data.inCampaign
      }
    case JOIN_CAMPAIGN:
      console.log(action.payload.data);
      return {
        ...state,
        campaign: action.payload.data.campaignDetails.campaign,
        inCampaign: true
      }
    case LEAVE_CAMPAIGN:
      // Leave the campaign with the character
      return {
        ...state,
        campaign: null,
        inCampaign: false
      }
    default:
      return state;
  }
}
