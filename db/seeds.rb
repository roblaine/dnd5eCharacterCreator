
# seed the database with one sample npc and one sample player character
Being.create(
  is_npc: true,
  name: 'Charlie Orcington',
  age: 22,
  motivation: 'Highly educated orc who was adopted by an eccentric wealthy widower',
  dead: false,
  initiative: 14,
  current_hp: 28,
  max_hp: 28,
  level: 4,
  armor_class: 15,
  strength: 13,
  dexterity: 9,
  constitution: 12,
  intelligence: 10,
  wisdom: 11,
  charisma: 14,
  athletics: 10,
  acrobatics: 10,
  sleight_of_hand: 10,
  stealth: 10,
  arcana: 10,
  history: 10,
  investigation: 10,
  nature: 10,
  religion: 10,
  animal_handling: 10,
  insight: 10,
  medicine: 10,
  perception: 10,
  survival: 10,
  deception: 10,
  intimidation: 10,
  performance: 10,
  persuasion: 10,
  gold_pieces: 2500,
  created_at: Time.now,
  updated_at: Time.now
)

Being.create(
  is_npc: false,
  name: 'Player 1',
  age: 2,
  motivation: 'A player within the game',
  dead: false,
  initiative: 14,
  current_hp: 28,
  max_hp: 28,
  level: 4,
  armor_class: 15,
  strength: 13,
  dexterity: 9,
  constitution: 12,
  intelligence: 10,
  wisdom: 11,
  charisma: 14,
  athletics: 10,
  acrobatics: 10,
  sleight_of_hand: 10,
  stealth: 10,
  arcana: 10,
  history: 10,
  investigation: 10,
  nature: 10,
  religion: 10,
  animal_handling: 10,
  insight: 10,
  medicine: 10,
  perception: 10,
  survival: 10,
  deception: 10,
  intimidation: 10,
  performance: 10,
  persuasion: 10,
  gold_pieces: 25,
  created_at: Time.now,
  updated_at: Time.now
)

# add some weapons to the db
Weapon.create(
  name: "Great Axe",
  type: "MeleeWeapon",
  weapon_class: "Martial",
  range: 0,
  damage: "1d12",
  size: "Large",
  damage_type: "Slashing",
  properties: "Heavy, Two-handed",
  cost: 30,
  weight_lbs: 7,
  silvered: false,
  created_at: Time.now,
  updated_at: Time.now
)

# Seed the db with all of the potential skills that a being can have and
#   their proficiency
# skill_list = [
#   [ 'Athletics', 'Strength' ],
#   [ 'Acrobatics', 'Dexterity' ],
#   [ 'Sleight of Hand', 'Dexterity' ],
#   [ 'Stealth', 'Dexterity' ],
#   [ 'Arcana', 'Intelligence' ],
#   [ 'History', 'Intelligence' ],
#   [ 'Investigation', 'Intelligence' ],
#   [ 'Nature', 'Intelligence' ],
#   [ 'Religion', 'Intelligence' ],
#   [ 'Animal Handling', 'Wisdom' ],
#   [ 'Insight', 'Wisdom' ],
#   [ 'Medicine', 'Wisdom' ],
#   [ 'Perception', 'Wisdom' ],
#   [ 'Survival', 'Wisdom' ],
#   [ 'Deception', 'Charisma' ],
#   [ 'Intimidation', 'Charisma' ],
#   [ 'Performance', 'Charisma' ],
#   [ 'Persuasion', 'Charisma' ],
# ]
#
# skill_list.each do |s|
#   Skill.create(:name => s[0], :proficiency => s[1])
# end

AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')
