class CreateSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :skills do |t|
      t.string :name, null: false
      t.string :proficiency, null: false
    end
  end
end
