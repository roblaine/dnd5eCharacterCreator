require 'rails_helper'

RSpec.describe Being, type: :model do
  fixtures :beings

  context "is an npc" do
    it "should have an npc flag that is set to true" do
      n = beings(:npc_one)
      expect(n.is_npc).to eq true
    end

    it "should have a name of type string" do
      n = beings(:npc_one)
      expect(n.name.class).to eq String
    end
  end

  context "is not an npc" do
    it "should have an npc flag that is set to false" do
      n = beings(:non_npc)
      expect(n.is_npc).to eq false
    end
  end
end
