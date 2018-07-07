class RemoveClassFromItems < ActiveRecord::Migration[5.2]
  def change
    rename_column :items, :class, :weapon_class
  end
end
