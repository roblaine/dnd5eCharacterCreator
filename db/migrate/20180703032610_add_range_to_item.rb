class AddRangeToItem < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :range, :string
  end
end
