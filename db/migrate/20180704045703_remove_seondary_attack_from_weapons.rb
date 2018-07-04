class RemoveSeondaryAttackFromWeapons < ActiveRecord::Migration[5.2]
  def change
    remove_column :weapons, :seondary_attack
  end
end
