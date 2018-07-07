class RemoveColumnsFromItems < ActiveRecord::Migration[5.2]
  def change
    remove_column :items, :weight
    remove_column :items, :is_ammunition
    remove_column :items, :is_tool
    remove_column :items, :is_trinket
    remove_column :items, :weapon_class
    remove_column :items, :range
    remove_column :items, :damage
    remove_column :items, :damage_type
    remove_column :items, :properties
    remove_column :items, :silvered
  end
end
