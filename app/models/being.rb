class Being < ApplicationRecord
  # character can be half races, can have multiple skills, and proficiencies
  # use join tables
  
  # character has one inventory
  belongs_to :backpack
  # only at any given moment has 1 of each of the following
  belongs_to :main_weapon
  belongs_to :secondary_weapon
  belongs_to :ranged_weapon

  # add validations
end
