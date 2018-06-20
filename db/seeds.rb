
# seed the database with one sample npc and one sample player character
Being.create(
  is_npc: true,
  name: 'Charlie Orcington',
  age: 22,
  motivation: 'Hghly educated orc who was adopted by an eccentric wealthy widower',
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
  gold_pieces: 25,
  created_at: Time.now,
  updated_at: Time.now
)

# Seed the db with all of the potential skills that a being can have and their proficiencies
skill_list = [
  [ 'Athletics', 'Strength' ],
  [ 'Acrobatics', 'Dexterity' ],
  [ 'Sleight of Hand', 'Dexterity' ],
  [ 'Stealth', 'Dexterity' ],
  [ 'Arcana', 'Intelligence' ],
  [ 'History', 'Intelligence' ],
  [ 'Investigation', 'Intelligence' ],
  [ 'Nature', 'Intelligence' ],
  [ 'Religion', 'Intelligence' ],
  [ 'Animal Handling', 'Wisdom' ],
  [ 'Insight', 'Wisdom' ],
  [ 'Medicine', 'Wisdom' ],
  [ 'Perception', 'Wisdom' ],
  [ 'Survival', 'Wisdom' ],
  [ 'Deception', 'Charisma' ],
  [ 'Intimidation', 'Charisma' ],
  [ 'Performance', 'Charisma' ],
  [ 'Persuasion', 'Charisma' ],
]

skill_list.each do |s|
  Skill.create(:name => s[0], :proficiency => s[1])
end

# add some items to the db
items = [
  [ 'Medicine', 3, 0.3, false, false, false ],
  [ 'Bullet', 1, 0.25, false, false, false ]
]

items.each do |i|
  Item.create(:name => i[0], :cost => i[1], :weight => i[2], :is_trinket => i[3],
    :is_tool => i[4], :is_ammunition => i[5])
end
