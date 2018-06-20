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

ActiveRecord::Schema.define(version: 2018_06_20_041820) do

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
    t.integer "strength"
    t.integer "dexterity"
    t.integer "constitution"
    t.integer "intelligence"
    t.integer "wisdom"
    t.integer "charisma"
    t.integer "athletics"
    t.integer "acrobatics"
    t.integer "sleight_of_hand"
    t.integer "stealth"
    t.integer "arcana"
    t.integer "history"
    t.integer "investigation"
    t.integer "nature"
    t.integer "religion"
    t.integer "animal_handling"
    t.integer "insight"
    t.integer "medicine"
    t.integer "perception"
    t.integer "survival"
    t.integer "deception"
    t.integer "intimidation"
    t.integer "performance"
    t.integer "persuasion"
    t.integer "gold_pieces"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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

  create_table "dmg_type", force: :cascade do |t|
    t.string "dmg_type_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dmg_type_weapons", id: false, force: :cascade do |t|
    t.integer "weapon_id", null: false
    t.integer "dmg_type_id", null: false
    t.index ["weapon_id", "dmg_type_id"], name: "index_dmg_type_weapons_on_weapon_id_and_dmg_type_id"
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
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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
    t.string "proficiency", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  create_table "weapons", force: :cascade do |t|
    t.string "name", null: false
    t.integer "cost"
    t.float "weight"
    t.string "damage"
    t.boolean "ranged"
    t.string "type"
    t.string "size"
    t.string "damage_type"
    t.string "primary_attack"
    t.string "seondary_attack"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
