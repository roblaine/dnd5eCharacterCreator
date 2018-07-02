# how atomic should test cases be? Do i need to test for literally every
#   possible field in the model?
require 'rails_helper'

RSpec.describe Being, type: :model do
  fixtures :beings

  context "is not an npc" do
    it "is valid only with all valid attributes" do
      expect(beings(:non_npc)).to be_valid
    end

    it "is not valid without a name" do
      b = beings(:non_npc)
      b.name = nil
      expect(b).to_not be_valid
    end

    it "is not valid without an age" do
      b = beings(:non_npc)
      b.age = nil
      expect(b).to be_valid
    end

    it "is not valid without an initiative" do
      b = beings(:non_npc)
      b.initiative = nil
      expect(b).to_not be_valid
    end

    # it "is not valid without a strength score" do
    #   b = beings(:non_npc)
    #   b.strength = nil
    #   expect(b).to_not be_valid
    # end

    it "is not valid without a dexterity score" do
      b = beings(:non_npc)
      b.dexterity = nil
      expect(b).to_not be_valid
    end

    it "is not valid without a wisdom score" do
      b = beings(:non_npc)
      b.wisdom = nil
      expect(b).to_not be_valid
    end

    it "is not valid without an intelligence score" do
      b = beings(:non_npc)
      b.intelligence = nil
      expect(b).to_not be_valid
    end

    it "is not valid without a charisma score" do
      b = beings(:non_npc)
      b.charisma = nil
      expect(b).to_not be_valid
    end

    it "is not valid without a constitution score" do
      b = beings(:non_npc)
      b.constitution = nil
      expect(b).to_not be_valid
    end

    fields = ['strength', 'acrobatics', 'athletics']
    fields.each do |f|
      it "is not valid without a #{f} score" do
        b = beings(:non_npc)
        b[f] = nil
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

    # npcs may be created without any of the following and still be valid
    it "is valid without a name" do
      b = beings(:npc)
      b.name = nil
      expect(b).to be_valid
    end

    it "is valid without an age" do
      b = beings(:npc)
      expect(b).to be_valid
    end

    it "is valid without a motivation" do
      b = beings(:npc)
      b.motivation = nil
      expect(b).to be_valid
    end

    it "is valid without a strength score" do
      b = beings(:npc)

      expect(b).to be_valid
    end

    it "is valid without a dexterity score" do
      b = beings(:npc)

      expect(b).to be_valid
    end

    it "is valid without a constitution score" do
      b = beings(:npc)

      expect(b).to be_valid
    end

    it "is valid without a intelligence score" do
      b = beings(:npc)

      expect(b).to be_valid
    end

    it "is valid without a wisdom score" do
      b = beings(:npc)

      expect(b).to be_valid
    end

    it "is valid without a charisma score" do
      b = beings(:npc)

      expect(b).to be_valid
    end


    # a goblin might just be really poor :(
    it "is valid without any gold pieces (gp)" do
      b = beings(:npc)
      b.gold_pieces = 0
      expect(b).to be_valid
    end
  end

end
