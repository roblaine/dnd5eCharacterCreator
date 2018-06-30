require 'rails_helper'

RSpec.describe Being, type: :model do
  fixtures :beings

  Being.columns_hash is_expected.to include("name")

  context "is an npc" do
    it "should have an npc flag that is set to true" do
      n = beings(:npc_one)
      expect(n.is_npc).to eq true
    end
  end

  context "is not an npc" do
    it "should have an npc flag that is set to false" do
      n = beings(:non_npc)
      expect(n.is_npc).to eq false
    end
  end

  context "either npc or non_npc" do
    it "should have a name of type string" do
      n = beings(:npc_one)
      expect(n.name.class).to eq String
    end

    it "should have have a field for strength" do
      n = beings(:npc_one)
      # expect(n.)
    end
  end
end
