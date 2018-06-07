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
      # store as boolean instead of destroying object
      t.boolean :dead

      t.references :proficiencies, foreign_key: true
      # skills are the individual skills such as acrobatics
      t.references :skills, foreign_key: true

      # the characters survivability
      t.integer :initiative
      t.integer :current_hp
      t.integer :max_hp
      t.integer :level
      t.integer :armor_class
      # this should maybe be it's own model and I should reference it here
      t.string :hit_die
      t.boolean :first_saving_throw
      t.boolean :second_saving_throw
      t.boolean :third_saving_throw

      # outline the primary main attributes
      t.integer :strength
      t.integer :dexterity
      t.integer :constitution
      t.integer :intelligence
      t.integer :wisdom
      t.integer :charisma

      # items and weapons
      t.references :backpack, foreign_key: true
      t.references :main_weapon, foreign_key: true
      t.references :secondary_weapon, foreign_key: true
      t.references :ranged_weapon, foreign_key: true

      t.timestamps
    end
  end
end
