# dndTracker
DND Character Sheets &amp; more

TODO:
 - [ ] Character creation form has class and subclass drop-downs
 - [ ] Character creation is interactive and step by step
 - [ ] Character has an object in this.state.classes which contains
  each subclass list for a given class,
  ```
  this.state.classes = {  
    cleric: { sub: [war: "War"] },  
    wizard: { sub: [conjuration: "Conjuration", illusion: "Illusion"] }
  };
  ```
 - [x] Character has an inventory
 - [x] Inventory stores weapons, items, equipment, money
 - [x] Add a campaign model that stores an array of characters and a dm
 - [x] Add characters to the campaign by a form with input field for campaign id and a play button
 - [x] Button submits the form to the reducer that will assign a player to a campaign
 - [ ] DM Can see a list of all players and creatures ordered by current initiative and a log of changes for a campaign that they own
 - [x] Add timestamp for creating and updating a character
 - [ ] Display keep track of updates in a log style format (Maybe just pull data into the campaign on the fly)
a
a
