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
