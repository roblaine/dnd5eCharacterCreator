import axios from "axios";
import Log from "../utils/log";
import {
  FETCH_CAMPAIGN,
  JOIN_CAMPAIGN,
  LEAVE_CAMPAIGN,
  GET_ERRORS,
} from "./types";

export const queryMyCampaign = campaignData => dispatch => {
  // Set state to contain the campgin info and if the player is in a campaign
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
