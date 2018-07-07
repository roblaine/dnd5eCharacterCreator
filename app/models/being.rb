class Being < ApplicationRecord
  # character can be half races, can have multiple skills, and proficiencies
  # use join tables for the impl of inventories, skills, weapons, and
  #   races/languages/proficiencies

  # character has one inventory
  # belongs_to :backpack
  # only at any given moment has 1 of each of the following
  # belongs_to :main_weapon
  # belongs_to :secondary_weapon
  # belongs_to :ranged_weapon
  if !:is_npc
    validates :name, :armor_class, :age, :current_hp,
      :max_hp, :level, :strength, :dexterity, :wisdom, :intelligence, :constitution,
      :charisma, :athletics, :acrobatics, :sleight_of_hand, :stealth, :arcana,
      :history, :investigation, :nature, :religion, :animal_handling, :insight,
      :medicine, :survival, :perception, :intimidation, :performance, :persuasion,
      :deception, :gold_pieces, presence: true
  elsif :is_npc
    validates :gold_pieces, presence: true
  end
  # validate all of the boolean_field_names using this method as false.blank?
  #  == true in rails
  validates :dead, :is_npc, inclusion: { in: [true, false] }
  # the following may at some point be nil
  validates :initiative, :motivation, presence: false
end
