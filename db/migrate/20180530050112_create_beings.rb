class CreateBeings < ActiveRecord::Migration[5.2]
  def change
    create_table :beings do |t|
      # set to true if created by the DM user account model
      t.boolean :is_npc

      # fields for rp reasons
      t.string :name, not_nullable: true
      t.integer :age
      t.string :motivation
      t.references :race, foreign_key: true
      # store as boolean instead of destroying object
      t.boolean :dead

      # TODO solved by implementing a join table
      t.references :languages, foreign_key: true

      # TODO solved by implementing a join table
      t.references :proficiencies, foreign_key: true
      # skills are the individual skills such as acrobatics
      # TODO solved by implementing a join table
      t.references :skills, foreign_key: true

      # the characters survivability
      # default some of these values, and make them not nullable.
      t.integer :initiative
      t.integer :current_hp
      t.integer :max_hp
      t.integer :level
      t.integer :armor_class
      # die should maybe be it's own model and I should reference it here
      t.string :hit_die
      # default to false
      t.boolean :first_saving_throw
      t.boolean :second_saving_throw
      t.boolean :third_saving_throw

      # outline the ability scores
      # make sure that these cannot be null, maybe even default to 1
      t.integer :strength
      t.integer :dexterity
      t.integer :constitution
      t.integer :intelligence
      t.integer :wisdom
      t.integer :charisma

      # items and weapons
      t.references :backpack, foreign_key: true
      # TODO solved by implementing a join table between characters & weapons
      t.references :main_weapon, foreign_key: true
      t.references :secondary_weapon, foreign_key: true
      t.references :ranged_weapon, foreign_key: true
      t.integer :gold_pieces

      t.timestamps
    end
  end
end
