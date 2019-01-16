import {
  FETCH_CAMPAIGN,
  FETCH_PUBLIC_CAMPAIGNS,
  JOIN_CAMPAIGN,
  LEAVE_CAMPAIGN
} from "../actions/types";

import Log from "../utils/log";

const initialState = {
  publicCampaigns: [],
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
    case FETCH_PUBLIC_CAMPAIGNS:
      const returnedCampaigns = action.payload;
      Log.trace("Returning action.payload.data from dispatcher from publicCampaigns");
      Log.trace(returnedCampaigns);
      state = {
        ...state,
        publicCampaigns: returnedCampaigns
      }
      Log.trace("New state:");
      Log.trace(state);
      return state;
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
        campaign: null,
        inCampaign: false
      }
    default:
      return state;
  }
}
