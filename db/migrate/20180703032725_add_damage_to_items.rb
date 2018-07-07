class AddDamageToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :damage, :string
  end
end
