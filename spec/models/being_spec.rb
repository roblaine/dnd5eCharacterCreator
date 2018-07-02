# how atomic should test cases be? Do i need to test for literally every
#   possible field in the model?
require 'rails_helper'

RSpec.describe Being, type: :model do
  fixtures :beings

  context "is not an npc" do
    it "is valid only with all valid attributes" do
      expect(beings(:non_npc)).to be_valid
    end

    # define all of the available attributes which we want to test the validity of
    [
      'name', 'age', 'initiative', 'armor_class', 'dead', 'motivation', 'current_hp',
      'max_hp', 'level',
      'strength', 'dexterity', 'wisdom', 'intelligence', 'constitution', 'charisma',
      'athletics', 'acrobatics', 'sleight_of_hand', 'stealth', 'arcana', 'history',
      'investigation', 'nature', 'religion', 'animal_handling', 'insight', 'medicine',
      'perception', 'survival', 'deception', 'intimidation', 'performance', 'persuasion'
    ].each do |a|
      it "is not valid without a #{a} score" do
        b = beings(:non_npc)
        b[a] = nil
        expect(b).to_not be_valid
      end
    end

    # it "is not valid without an acrobatics score"

    # you might just be really poor :(
    it "is valid without any gold pieces (gp)" do
      b = beings(:non_npc)
      b.gold_pieces = 0
      expect(b).to be_valid
    end

  end # end of non npc

  context "is an npc" do
    it "is valid only with all valid attributes" do
      expect(beings(:npc)).to be_valid
    end

    # define all of the available attributes which we want to test the validity of
    [
      'name', 'age', 'initiative', 'armor_class', 'motivation', 'current_hp',
      'max_hp', 'level',
      'strength', 'dexterity', 'wisdom', 'intelligence', 'constitution', 'charisma',
      'athletics', 'acrobatics', 'sleight_of_hand', 'stealth', 'arcana', 'history',
      'investigation', 'nature', 'religion', 'animal_handling', 'insight', 'medicine',
      'perception', 'survival', 'deception', 'intimidation', 'performance', 'persuasion'
    ].each do |a|
      it "is not valid without a #{a} score" do
        b = beings(:npc)
        b[a] = nil
        expect(b).to be_valid
      end
    end

    it "should not be valid with an invalid dead value" do
      b = beings(:npc)
      b.dead = nil
      expect(b).to_not be_valid
    end

    # a goblin might just be really poor :(
    it "is valid without any gold pieces (gp)" do
      b = beings(:npc)
      b.gold_pieces = 0
      expect(b).to be_valid
    end

  end

end
