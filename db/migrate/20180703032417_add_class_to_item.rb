class AddClassToItem < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :class, :string
  end
end
