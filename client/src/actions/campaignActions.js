import axios from "axios";
import {
  JOIN_CAMPAIGN,
  DELETE_CHARACTER,
  GET_ERRORS,
} from "./types";

export const leaveCampaign = campaignData => dispatch => {

};

export const joinCampaign = campaignData => dispatch => {
  // change the state to reflect the selected character to be used by
  // campaignAction
  console.log("Play Data: ", campaignData);
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
