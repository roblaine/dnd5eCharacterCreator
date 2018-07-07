class CreateRaceJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :beings, :races do |t|
      # a being can have one or more races, must have at minimum 1
      t.index [:being_id, :race_id]
      # t.index [:race_id, :being_id]
    end
  end
end
