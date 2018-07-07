require 'rails_helper'

RSpec.describe RangedWeapon, type: :model do
  fixtures :weapons

  it "is invalid without a name" do
    w = weapons(:bow)
    w.name = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a weapon_class" do
    w = weapons(:bow)
    w.weapon_class = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a damage value" do
    w = weapons(:bow)
    w.damage = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a damage type" do
    w = weapons(:bow)
    w.damage_type = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a range" do
    w = weapons(:bow)
    w.range = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a weight" do
    w = weapons(:bow)
    w.weight_lbs = nil
    expect(w).to_not be_valid
  end

  it "is invalid without properties" do
    w = weapons(:bow)
    w.properties = nil
    expect(w).to_not be_valid
  end

  it "is invalid without silvered" do
    w = weapons(:bow)
    w.silvered = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a cost" do
    w = weapons(:bow)
    w.cost = nil
    expect(w).to_not be_valid
  end
end
