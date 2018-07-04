class AddPropertiesToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :properties, :string
  end
end
