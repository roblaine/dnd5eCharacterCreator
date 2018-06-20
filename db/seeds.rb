
# seed the database with one sample npc and one sample player character
Being.create(
  is_npc: true,
  name: 'Charlie Orcington',
  age: 22,
  motivation: 'Hghly educated orc who was adopted by an eccentric wealthy widower.',
  dead: false,
  initiative: 14,
  current_hp: 28,
  max_hp: 28,
  level: 4,
  armor_class: 15,
  hit_die: '1d6',
  first_saving_throw: false,
  second_saving_throw: false,
  third_saving_throw: false,
  strength: 13,
  dexterity: 9,
  constitution: 12,
  intelligence: 10,
  wisdom: 11,
  charisma: 14,
  gold_pieces: 2500
)

# Seed the db with all of the potential skills that a character can have
skill_list =[
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
  Skill.create(:name => s[0], :level => 0, :proficiency => s[1])
end
