class AddDamageTypeToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :damage_type, :string
  end
end
