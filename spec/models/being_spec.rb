# how atomic should test cases be? Do i need to test for literally every
#   possible field in the model?
require 'rails_helper'

RSpec.describe Being, type: :model do
  fixtures :beings

  context "is not an npc" do
    it "is valid only with all valid attributes" do
      expect(beings(:non_npc)).to be_valid
    end

    it "is not valid without a name"
    it "is not valid without an age"
    it "is not valid without an initiative"
  end

  context "is an npc" do
    it "is valid only with all valid attributes" do
      expect(beings(:npc)).to be_valid
    end

    # npcs may be created without any of the following and still be valid
    it "is valid without a name"
    it "is valid without an age"

    it "is valid without a motivation" do
      b = beings(:npc)
      b.motivation = nil
      expect(b).to be_valid
    end

    it "is valid without a strength score"
    it "is valid without a dexterity score"
    it "is valid without a constitution score"
    it "is valid without a intelligence score"
    it "is valid without a wisdom score"
    it "is valid without a charisma score"
  end

  # you might just be really poor :(
  it "is valid without any gold pieces (gp)" do
    b = beings(:non_npc)
    b.gold_pieces = 0
    expect(b).to be_valid
  end
end
