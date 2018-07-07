class ModifyColumnsOnWeapons < ActiveRecord::Migration[5.2]
  def change
    remove_column :weapons, :primary_attack
    remove_column :weapons, :seondary_attack
    add_column :weapons, :properties, :string
    add_column :weapons, :silvered, :boolean

  end
end
