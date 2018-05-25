class Weapon
  include Mongoid::Document
  field :name, type: String

  field :melee, type: Boolean
  field :ranged, type: Boolean
  field :thrown, type: Boolean
  field :range, type: Integer

  field :damage, type: String
  field :damage_type, type: String
  field :secondary_damage, type: String

  field :properties, type: String
  field :weight, type: Integer
  field :modifiers, type: String
end
