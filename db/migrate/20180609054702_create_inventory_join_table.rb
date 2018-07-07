class CreateInventoryJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :inventory, :items do |t|
      # a particular inventory can have multiple items
      t.index [:inventory_id, :item_id]
      # to connect a being with an inventory we need another join table 
      # t.index [:item_id, :inventory_id]
    end
  end
end
