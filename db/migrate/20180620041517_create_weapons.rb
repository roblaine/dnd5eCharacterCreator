class CreateWeapons < ActiveRecord::Migration[5.2]
  def change
    create_table :weapons do |t|
      t.string :name, null: false
      # cost in gold pieces (gp)
      t.integer :cost
      # weight in pounds
      t.float :weight

      t.string :damage
      t.boolean :ranged
      t.string :type
      t.string :size

      # eg bludgeoning/slashing/piercing
      t.string :damage_type
      t.string :primary_attack
      t.string :seondary_attack

      t.timestamps
    end
  end
end
