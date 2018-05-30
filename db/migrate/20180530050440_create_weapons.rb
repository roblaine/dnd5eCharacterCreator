class CreateWeapons < ActiveRecord::Migration[5.2]
  def change
    create_table :weapons do |t|
      t.string :name
      t.boolean :is_ranged
      t.string :primary_attack
      t.string :seondary_attack

      t.timestamps
    end
  end
end
