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

      # items and weapons are stroed in an inventory which stores multiple items
      # this can be easily trasnferred to other beings
      t.references :inventory, foreign_key: true

      t.integer :gold_pieces

      t.timestamps
    end
  end
end
