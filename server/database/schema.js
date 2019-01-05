const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: { 
		type: String, 
		unique: true,
		lowercase: true
	},
	password: String
});

var User = new mongoose.model("User", userSchema);

var characterSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		lowercase: true
	},
	level: Number,
	race: String,
	class: String,
	age: Number,
	creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

var Character = new mongoose.model("Character", characterSchema);


var spellSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		lowercase: true
	},
	level: Number,
	school: String,
	caster_class: String,
	desc: String,
	ritual: Boolean,
	range: Number,
	damage: String
});

var Spell = new mongoose.model("Spell", spellSchema);

function seedDatabase() {
	// Drop the database before seeding again
	//console.log('\n!!! --- Dropping database --- !!!\n');
	//mongoose.connection.executeDbCommand( {dropDatabase:1}, function(err, result) { if (err) { console.log(err); } done(); });

	var demoUser = new User({
		username: 'johnny bravo',
		password: 'monkey'
	});
	
	var demoChar = new Character({
		name: 'jogn', 
		level: 1, 
		race: 'Dwarf',
		class: 'Cleric',
		age: 43,
		creator: demoUser
	});

	demoUser.save()
	.then(item => {
		console.log(`Saved user: ${item}`);
	})
	.catch(err => {
		console.error(err)
	});

	demoChar.save()
	.then(item => {
		console.log(`Saved character: ${item}`);
	})
	.catch(err => {
		console.error(err);
	});
}

module.exports = {
  User, 
  Character, 
  Spell,
  seedDatabase
};

