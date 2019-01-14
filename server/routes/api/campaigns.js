// API endpoint for creating, updating, and deleting a campaign
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Load the input validation method
const validateCampaignCreate = require('../../campaigns/validation/creation');
// const validateCampaignQuery = require('../../campaigns/validation/query');
// const validateCampaignUpdate = require('../../campaigns/validation/update');
const validateCampaignJoin = require("../../campaigns/validation/join");

// Load the campaign model
const campaign = require('../../campaigns/campaignSchema');

// @route POST api/campaigns/query
// @desc Query Campaigns
// @access Public
router.post('/query', (req, res) => {
  const public = req.body.public;

  if(public) {
    // Get all of the public campaigns that a user can join
    Campaign.find({ public: public })
    .then(campaigns => {
      res.send(campaigns);
    })
  } else {
    // Find the user
    User.findOne({ email: req.body.host })
    .then(user => {
      // Find the campaigns hosted by a user
      Campaign.find({ host: user._id })
      .then(campaign => {
        res.send(campaign);
      });
    });
  }
});

// @route POST api/campaigns/add
// @desc Create a new campaign
// @access Public
router.post('/add', (req, res) => {
  // Validate the inputs before assigning anything
  const { errors, isValid } = validateCampaignCreate(req.body);

  if(!isValid) {
    // Return 400 status and json errors on invalid form submission
    return res.status(400).json(errors);
  }

  const email = req.body.host;
  const public = req.body.public;
  const name = req.body.name;

  User.findOne({ email: email })
  .then(host => {
    if(!host) {
      return res.status(400).json({ email: 'User not found with that email'});
    }

    Campaign.findOne({ name: name })
    .then(campaign => {
      if(campaign) {
        return res.status(400).json({ name: 'You already have a campaign with this name' });
      }
      const newCampaign = new Campaign({
        host: host,
        name: req.body.name,
        public: public
      });

      newCampaign
      .save()
      .then(campaign => {
        host.campaign = { id: campaign.id, dm: true };
        host.save()
        .then(h => {
          res.json({ host: h, campaign: campaign })
        })
        .catch(error => console.log(error));

      })
      .catch(err => console.log(err));
    });
  });
});

// @route POST api/campaigns/delete
// @desc Delete an existing campaign
// @access Public
router.post('/delete', (req, res) => {
  // Find the campaign to delete, loop through all the players and remove them
  // then delete the campaign
  Campaign.findOne({ _id: req.body.campaignId })
  .then(camp => {
    if(!camp) {
      return res.status(400).json({ errors: "Must enter a valid campaignId"})
    }

    // Loop over each user in the campaign
    camp.players.forEach(playerId => {
      // Find the user
      User.findOne({ _id: playerId })
      .then(player => {
        if(player) {
          // TODO troubleshoot and fix this loop
          // Find the user's characters
          Character.find({ owner: player._id })
          .then(characters => {
            // Loop over each one
            characters.forEach(character => {
              // console.log(player.email, character.name, character.campaign);
              // If the character has a campaign, remove the campaign
              if(character.campaign) {
                // console.log("!!! Campaign Info: %s %s", character.campaign, camp._id);
                if(character.campaign.equals(camp._id)) {
                  console.log("Removing campaign from char...");
                  // Unset the campaign and save the update
                  character.campaign = undefined;

                  character
                  .save();
                  console.log(character.campaign);
                }
              }
            });
          });

          player.campaign = { id: undefined, dm: false };

          player
          .save();
        }
      })
    });
    Campaign.deleteOne({ _id: camp.id })
    .then(res.send({ message: "Deleted campaign" }));
  })
  .catch(err => console.log(err));
});


// @route POST api/campaigns/join
// @desc Join an existing campaign based on the campaignId
// @access Public
router.post('/join', (req, res) => {
  const { errors, isValid } = validateCampaignJoin(req.body);
  if(!isValid) {
    console.log(errors);
    // Return 400 status and json errors on invalid form submission
    return res.status(400).json(errors);
  }

  // Details about the joining player
  const playerId = mongoose.Types.ObjectId(req.body.playerId);
  const characterId = mongoose.Types.ObjectId(req.body.characterId);
  const campaignId = mongoose.Types.ObjectId(req.body.campaignId);

  if(!campaignId) {
    return res.status(400).json({ campaignId: 'A valid campaign ID is required' });
  }

  // Find the user that is joining the campaign
  User.findOne({ _id: playerId })
  .then(joiningPlayer => {
    if(!joiningPlayer) {
      return res.status(400).json({ playerId: 'A valid playerId is required' });
    }

    Character.findOne({ _id: characterId })
    .then(joiningChar => {
      if(!joiningChar) {
        return res.status(400).json({ characterId: 'A valid character is required' });
      }

      // Find the campaign to add the player to it
      Campaign.findOne({ _id: campaignId })
      .then(campaign => {
        if(!campaign) {
          return res.status(400).json({ campaignId: 'A valid campaign is required' });
        }

        var hasPlayer = campaign.players.some(function (player) {
            return player.equals(joiningPlayer._id);
        });

        // update the campaign and the player and the player's character
        if(hasPlayer) {
          return res.status(400).json({  playerId: 'This player has already joined' });
        }

        // add the player if it isn't already there
        campaign.players.push(joiningPlayer);
        joiningPlayer.campaign.id = campaignId;
        joiningChar.campaign = campaignId;

        // save the player change
        joiningPlayer
        .save()
        .then(player => {
          // Save the campaign change
          campaign
          .save()
          .then(camp => {
            // save the character
            joiningChar
            .save()
            .then(char => {
              const returnObject = {player: joiningPlayer, campaign: camp, character: char};
              res.send( { campaignDetails: returnObject });
            })
            .catch(err => console.log(err));
          })
          .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
});


module.exports = router;
