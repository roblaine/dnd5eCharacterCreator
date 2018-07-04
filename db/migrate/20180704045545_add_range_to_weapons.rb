class AddRangeToWeapons < ActiveRecord::Migration[5.2]
  def change
    add_column :weapons, :range, :integer
  end
end
