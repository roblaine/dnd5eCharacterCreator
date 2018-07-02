require 'rails_helper'

RSpec.describe RangedWeapon, type: :model do
  fixtures :ranged_weapons

  it "is invalid without a name" do
    w = ranged_weapons(:bow)
    w.name = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a class" do
    w = ranged_weapons(:bow)
    w.class = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a damage value" do
    w = ranged_weapons(:bow)
    w.damage = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a damage type" do
    w = ranged_weapons(:bow)
    w.damage_type = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a range" do
    w = ranged_weapons(:bow)
    w.range = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a weight" do
    w = ranged_weapons(:bow)
    w.weight_lbs = nil
    expect(w).to_not be_valid
  end

  it "is invalid without properties" do
    w = ranged_weapons(:bow)
    w.properties = nil
    expect(w).to_not be_valid
  end

  it "is invalid without silvered" do
    w = ranged_weapons(:bow)
    w.silvered = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a cost" do
    w = ranged_weapons(:bow)
    w.cost = nil
    expect(w).to_not be_valid
  end
end
