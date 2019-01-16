import axios from "axios";
import Log from "../utils/log";
import {
  FETCH_CAMPAIGN,
  FETCH_PUBLIC_CAMPAIGNS,
  JOIN_CAMPAIGN,
  LEAVE_CAMPAIGN,
  GET_ERRORS,
} from "./types";

// Get all of the public campaigns and add them to the state.publicCampaigns
export const fetchPublicCampaigns = () => dispatch => {
  Log.trace("Fetching public campaigns");
  const campaignData = { public: true };
  axios
  .post("/api/campaigns/query", campaignData)
  .then(function(returnedCampaigns) {
    Log.trace("Dispatching with public campaign info");
    Log.trace(returnedCampaigns);
    dispatch({
      type: FETCH_PUBLIC_CAMPAIGNS,
      payload: returnedCampaigns.data.publicCampaigns
    });
  });
}

export const queryMyCampaign = campaignData => dispatch => {
  // Set state to contain the campaign info and if the player is in a campaign
  Log.trace("Querying the campaign for the user");
  axios
  .post("/api/campaigns/myCampaign", campaignData)
  .then(function(campaignData) {
    dispatch({
      type: FETCH_CAMPAIGN,
      payload: campaignData
    })
  })
  .catch(err => {
    Log.warn("Failed to retrieve the user's campaign");
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  })
}


export const leaveCampaign = campaignData => dispatch => {
  // Call the api method to leave the campaign
  axios
  .post("/api/campaigns/leave", campaignData)
  .then(function(campaignData) {
    dispatch({
      type: LEAVE_CAMPAIGN,
      payload: campaignData
    })
  })
  .catch(err => {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  })
};

export const joinCampaign = campaignData => dispatch => {
  // change the state to reflect the selected character to be used by
  // campaignAction
  axios
  .post("/api/campaigns/join", campaignData)
  .then(function(campaignData) {
    dispatch({
      type: JOIN_CAMPAIGN,
      payload: campaignData
    })
  })
  .catch(err => {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  })
};
