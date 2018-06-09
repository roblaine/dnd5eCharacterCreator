class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      # cost in gold pieces (gp)
      t.integer :cost
      # weight in pounds
      t.float :weight

      # definitions if item is tool/trinket
      t.boolean :is_trinket
      t.boolean :is_tool
      # definitions for if this item is a weapon
      t.boolean :is_ammunition
      t.boolean :is_weapon
      t.boolean :is_ranged

      # outline the category of is_weapon
      t.string :weapon_type
      # reference the table for weapon properites.
      # TODO solved by implementing a join table
      t.references :weapon_properties, foreign_key: true
      # eg bludgeoning/slashing/piercing
      t.string :damage_type
      t.string :primary_attack
      t.string :seondary_attack

      t.timestamps
    end
  end
end
