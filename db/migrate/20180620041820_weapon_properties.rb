class WeaponProperties < ActiveRecord::Migration[5.2]
  def change
    # seed the database with all of the different damage types that are
    # => available
    create_table :dmg_type do |t|
      t.string :dmg_type_name, null: false

      t.timestamps
    end
  end
end
