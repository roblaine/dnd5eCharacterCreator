class CreateDamageTypeJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :weapons, :weapon_properties do |t|
      t.index [:weapon_id, :weapon_property_id]
      # t.index [:weapon_property_id, :weapon_id]
    end
  end
end
