require 'rails_helper'

RSpec.describe MeleeWeapon, type: :model do
  fixtures :weapons

  it "is valid with valid attributes" do
    expect(weapons(:axe)).to be_valid
  end

  it "is invalid without a name" do
    w = weapons(:axe)
    w.name = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a class" do
    w = weapons(:axe)
    w.class = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a damage value" do
    w = weapons(:axe)
    w.damage = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a damage type" do
    w = weapons(:axe)
    w.damage_type = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a range" do
    w = weapons(:axe)
    w.range = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a weight" do
    w = weapons(:axe)
    w.weight_lbs = nil
    expect(w).to_not be_valid
  end

  it "is invalid without properties" do
    w = weapons(:axe)
    w.properties = nil
    expect(w).to_not be_valid
  end

  it "is invalid without silvered" do
    w = weapons(:axe)
    w.silvered = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a cost" do
    w = weapons(:axe)
    w.cost = nil
    expect(w).to_not be_valid
  end
end
