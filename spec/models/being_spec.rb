# how atomic should test cases be? Do i need to test for literally every
#   possible field in the model?
require 'rails_helper'

RSpec.describe Being, type: :model do
  fixtures :beings

  context "is not an npc" do
    it "should be valid without an initiative score" do
      b = beings(:non_npc)
      b.initiative = nil
      expect(b).to be_valid
    end

    # define all of the available attributes which we want to test the validity of
    [
      'name', 'age', 'armor_class', 'motivation', 'current_hp',
      'max_hp', 'level',
      'strength', 'dexterity', 'wisdom', 'intelligence', 'constitution', 'charisma',
      'athletics', 'acrobatics', 'sleight_of_hand', 'stealth', 'arcana', 'history',
      'investigation', 'nature', 'religion', 'animal_handling', 'insight', 'medicine',
      'perception', 'survival', 'deception', 'intimidation', 'performance', 'persuasion'
    ].each do |a|
      it "should be valid without a #{a} score" do
        b = beings(:non_npc)
        b[a] = nil
        expect(b).to be_valid
      end
    end

    it "should not be valid with a nil dead value" do
      b = beings(:non_npc)
      b.dead = nil
      expect(b).to_not be_valid
    end

    it "should not be valid with a nil gold_pieces value" do
      b = beings(:non_npc)
      b.gold_pieces = nil
      expect(b).to_not be_valid
    end

  end # end of non npc

  context "is an npc" do
    it "should be valid without an initiative score" do
      b = beings(:npc)
      b.initiative = nil
      expect(b).to be_valid
    end

    # define all of the available attributes which we want to test the validity of
    [
      'name', 'age', 'armor_class', 'motivation', 'current_hp',
      'max_hp', 'level',
      'strength', 'dexterity', 'wisdom', 'intelligence', 'constitution', 'charisma',
      'athletics', 'acrobatics', 'sleight_of_hand', 'stealth', 'arcana', 'history',
      'investigation', 'nature', 'religion', 'animal_handling', 'insight', 'medicine',
      'perception', 'survival', 'deception', 'intimidation', 'performance', 'persuasion'
    ].each do |a|
      it "should be valid without a #{a} score" do
        b = beings(:npc)
        b[a] = nil
        expect(b).to be_valid
      end
    end

    it "should not be valid with a nil dead value" do
      b = beings(:npc)
      b.dead = nil
      expect(b).to_not be_valid
    end

    it "should be valid with a nil gold_pieces value" do
      b = beings(:npc)
      b.gold_pieces = nil
      expect(b).to_not be_valid
    end

  end

end
