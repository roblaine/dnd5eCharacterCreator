class Weapon < ApplicationRecord
  if :type != "MeleeWeapon"
    validates :range, presence: true
  end

  validates :name, :weapon_class, :damage, :damage_type,
    :properties, :cost, :size, :weight_lbs, presence: true

  validates :silvered, inclusion: { in: [true, false] }
end
