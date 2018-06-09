class CreateSkillsetJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :beings, :skills do |t|
      # a character can have multiple skills
      t.index [:being_id, :skill_id]
      # t.index [:skill_id, :being_id]
    end
  end
end
