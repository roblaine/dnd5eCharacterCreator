class AddWeightLbsToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :weight_lbs, :float
  end
end
