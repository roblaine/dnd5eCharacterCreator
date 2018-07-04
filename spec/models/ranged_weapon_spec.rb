require 'rails_helper'

RSpec.describe RangedWeapon, type: :model do
  fixtures :items

  it "is invalid without a name" do
    w = items(:bow)
    w.name = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a class" do
    w = items(:bow)
    w.class = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a damage value" do
    w = items(:bow)
    w.damage = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a damage type" do
    w = items(:bow)
    w.damage_type = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a range" do
    w = items(:bow)
    w.range = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a weight" do
    w = items(:bow)
    w.weight_lbs = nil
    expect(w).to_not be_valid
  end

  it "is invalid without properties" do
    w = items(:bow)
    w.properties = nil
    expect(w).to_not be_valid
  end

  it "is invalid without silvered" do
    w = items(:bow)
    w.silvered = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a cost" do
    w = items(:bow)
    w.cost = nil
    expect(w).to_not be_valid
  end
end
