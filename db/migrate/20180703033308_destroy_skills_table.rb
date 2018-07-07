class DestroySkillsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :beings_skills
  end
end
