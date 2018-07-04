class DropRangedWeaponsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :ranged_weapons
    drop_table :melee_weapons
    drop_table :dmg_type_weapons
    drop_table :dmg_type
    
  end
end
