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

      # the being's survivability
      #   default some of these values, and make them not nullable.
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

      # outline a being's skills
      t.integer :athletics
      t.integer :acrobatics
      t.integer :sleight_of_hand
      t.integer :stealth
      t.integer :arcana
      t.integer :history
      t.integer :investigation
      t.integer :nature
      t.integer :religion
      t.integer :animal_handling
      t.integer :insight
      t.integer :medicine
      t.integer :perception
      t.integer :survival
      t.integer :deception
      t.integer :intimidation
      t.integer :performance
      t.integer :persuasion

      t.integer :gold_pieces

      t.timestamps
    end
  end
end
