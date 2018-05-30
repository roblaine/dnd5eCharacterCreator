class Being < ApplicationRecord
  belongs_to :race
  belongs_to :proficiencies
  belongs_to :skills
  belongs_to :backpack
  belongs_to :main_weapon
  belongs_to :secondary_weapon
  belongs_to :ranged_weapon
end
