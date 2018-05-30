class CreateBeings < ActiveRecord::Migration[5.2]
  def change
    create_table :beings do |t|
      # set to true if created by the DM user account model
      t.boolean :is_npc

      # fields for rp reasons
      t.string :name
      t.int :age
      t.string :motivation
      t.references :race, foreign_key: true

      t.references :proficiencies, foreign_key: true
      t.references :skills, foreign_key: true
      t.integer :initiative
      t.integer :level
      t.string :hit_die

      # add other attributes
      t.integer :strength
      t.integer :dexterity
      t.integer :
      t.integer :
      t.integer :intelligence
      t.integer :wisdom

      # items and weapons
      t.references :backpack, foreign_key: true
      t.references :main_weapon, foreign_key: true
      t.references :secondary_weapon, foreign_key: true
      t.references :ranged_weapon, foreign_key: true

      t.timestamps
    end
  end
end
