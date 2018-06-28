require 'rails_helper'

RSpec.describe Being, type: :model do
  fixtures :beings
  context "is an npc" do
    it "should have an npc flag that is set to true" do
      n = Being.new(:is_npc => true)
      expect(n.is_npc).to eq true
    end
  end

  context "is not an npc" do
    it "should have an npc flag that is set to false" do
      n = Being.new(:is_npc => false)
      expect(n.is_npc).to eq false
    end
  end
end
