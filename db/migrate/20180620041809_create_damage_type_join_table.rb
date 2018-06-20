class CreateDamageTypeJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :weapons, :dmg_type do |t|
      t.index [:weapon_id, :dmg_type_id]
      # t.index [:weapon_property_id, :weapon_id]
    end
  end
end
