# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_06_14_020253) do

  create_table "beings", force: :cascade do |t|
    t.boolean "is_npc", null: false
    t.string "name"
    t.integer "age"
    t.string "motivation"
    t.boolean "dead"
    t.integer "initiative"
    t.integer "current_hp"
    t.integer "max_hp"
    t.integer "level"
    t.integer "armor_class"
    t.string "hit_die"
    t.boolean "first_saving_throw"
    t.boolean "second_saving_throw"
    t.boolean "third_saving_throw"
    t.integer "strength"
    t.integer "dexterity"
    t.integer "constitution"
    t.integer "intelligence"
    t.integer "wisdom"
    t.integer "charisma"
    t.integer "inventory_id"
    t.integer "gold_pieces"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["inventory_id"], name: "index_beings_on_inventory_id"
  end

  create_table "beings_races", id: false, force: :cascade do |t|
    t.integer "being_id", null: false
    t.integer "race_id", null: false
    t.index ["being_id", "race_id"], name: "index_beings_races_on_being_id_and_race_id"
  end

  create_table "beings_skills", id: false, force: :cascade do |t|
    t.integer "being_id", null: false
    t.integer "skill_id", null: false
    t.index ["being_id", "skill_id"], name: "index_beings_skills_on_being_id_and_skill_id"
  end

  create_table "inventories", force: :cascade do |t|
    t.string "name"
    t.string "size"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "inventory_items", id: false, force: :cascade do |t|
    t.integer "inventory_id", null: false
    t.integer "item_id", null: false
    t.index ["inventory_id", "item_id"], name: "index_inventory_items_on_inventory_id_and_item_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "name", null: false
    t.integer "cost"
    t.float "weight"
    t.boolean "is_trinket", null: false
    t.boolean "is_tool", null: false
    t.boolean "is_ammunition", null: false
    t.boolean "is_weapon", null: false
    t.boolean "is_ranged", null: false
    t.string "weapon_type"
    t.integer "weapon_properties_id"
    t.string "damage_type"
    t.string "primary_attack"
    t.string "seondary_attack"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["weapon_properties_id"], name: "index_items_on_weapon_properties_id"
  end

  create_table "races", force: :cascade do |t|
    t.string "name"
    t.integer "life_span"
    t.integer "move_distance"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "skills", force: :cascade do |t|
    t.string "name", null: false
    t.integer "level", null: false
    t.string "proficiency", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
