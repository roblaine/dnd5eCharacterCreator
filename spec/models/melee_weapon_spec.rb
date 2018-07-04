require 'rails_helper'

RSpec.describe MeleeWeapon, type: :model do
  fixtures :items

  it "is valid with valid attributes" do
    expect(items(:axe)).to be_valid
  end

  it "is invalid without a name" do
    w = items(:axe)
    w.name = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a class" do
    w = items(:axe)
    w.class = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a damage value" do
    w = items(:axe)
    w.damage = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a damage type" do
    w = items(:axe)
    w.damage_type = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a range" do
    w = items(:axe)
    w.range = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a weight" do
    w = items(:axe)
    w.weight_lbs = nil
    expect(w).to_not be_valid
  end

  it "is invalid without properties" do
    w = items(:axe)
    w.properties = nil
    expect(w).to_not be_valid
  end

  it "is invalid without silvered" do
    w = items(:axe)
    w.silvered = nil
    expect(w).to_not be_valid
  end

  it "is invalid without a cost" do
    w = items(:axe)
    w.cost = nil
    expect(w).to_not be_valid
  end
end
