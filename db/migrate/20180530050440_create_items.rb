class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name, null: false
      # cost in gold pieces (gp)
      t.integer :cost
      # weight in pounds
      t.float :weight

      # definitions if item is tool/trinket
      t.boolean :is_trinket, null: false
      t.boolean :is_tool, null: false
      t.boolean :is_ammunition, null: falss

      t.timestamps
    end
  end
end
