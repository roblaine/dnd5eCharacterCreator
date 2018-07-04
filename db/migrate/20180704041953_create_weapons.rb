class CreateWeapons < ActiveRecord::Migration[5.2]
  def change
    create_table :weapons do |t|
      t.string :name, null: false

      # the type, either ranged/melee/ammunition
      t.string :type, null: false
    
      # cost in gold pieces (gp)
      t.integer :cost
      # weight in pounds
      t.float :weight_lbs

      # the roll die, eg 1d12
      t.string :damage
      t.string :size
      # martial, etc
      t.string :weapon_class

      # eg bludgeoning/slashing/piercing
      t.string :damage_type
      t.string :primary_attack
      t.string :seondary_attack

      t.timestamps
    end
  end
end
