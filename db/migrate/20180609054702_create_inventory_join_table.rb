class CreateInventoryJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :beings, :items do |t|
      # a particular being can have multiple items
      t.index [:being_id, :item_id]
      # t.index [:item_id, :being_id]
    end
  end
end
