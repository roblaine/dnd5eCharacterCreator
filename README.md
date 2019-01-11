# dndTracker
DND Character Sheets &amp; more

TODO:
 - [] Character creation form has class and subclass dropdowns
==============================================================
  Character has an object in this.state.classes which contains
  each subclass list for a given class,

  this.state.classes = {
    cleric: { sub: [war: "War"] },
    wizard: { sub: [conjuration: "Conjuration", illusion: "Illusion"] }
  };

==============================================================
 - [x] Character has an inventory
 - [x] Inventory stores weapons, items, equipment, money
 - [] Add a session model that stores an array of characters and a dm
 - [] Add characters to the session by a form with input field for session id and a play button
 - [] Button submits the form to the reducer that will assign a player to a session
 - [] DM Can see a list of all players and creatures ordered by current initiative and a log of changes
 - [x] Add timestamp for creating and updating a character
 - [] Display keep track of updates in a log style format (Maybe just pull data into the session on the fly)
