class CreateRaces < ActiveRecord::Migration[5.2]
  def change
    create_table :races do |t|
      t.string :name
      t.integer :life_span
      t.integer :move_distance
      
      t.timestamps
    end
  end
end
