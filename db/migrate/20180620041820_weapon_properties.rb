class WeaponProperties < ActiveRecord::Migration[5.2]
  def change
    # seed the database with all of the different damage types that are
    # => available
    create_table :weapon_properties do |t|
      t.string :damage_type, null: false

      t.timestamps
    end
  end
end
