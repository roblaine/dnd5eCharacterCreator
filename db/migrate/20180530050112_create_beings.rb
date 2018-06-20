class CreateBeings < ActiveRecord::Migration[5.2]
  def change
    create_table :beings do |t|
      # set to true if created by the DM user account model
      t.boolean :is_npc, null: false

      # fields for rp reasons
      t.string :name
      t.integer :age
      t.string :motivation
      # set to true when dead, instead of destroying object, default false
      t.boolean :dead

      # the characters survivability
      # default some of these values, and make them not nullable.
      t.integer :initiative
      t.integer :current_hp
      t.integer :max_hp
      t.integer :level
      t.integer :armor_class

      # outline the ability scores
      # make sure that these cannot be null, maybe even default to 1
      t.integer :strength
      t.integer :dexterity
      t.integer :constitution
      t.integer :intelligence
      t.integer :wisdom
      t.integer :charisma

      t.integer :gold_pieces

      t.timestamps
    end
  end
end
