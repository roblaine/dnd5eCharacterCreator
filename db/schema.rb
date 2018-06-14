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

ActiveRecord::Schema.define(version: 2018_06_09_064354) do

  create_table "beings", force: :cascade do |t|
    t.boolean "is_npc"
    t.string "name"
    t.integer "age"
    t.string "motivation"
    t.integer "race_id"
    t.boolean "dead"
    t.integer "languages_id"
    t.integer "proficiencies_id"
    t.integer "skills_id"
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
    t.integer "backpack_id"
    t.integer "main_weapon_id"
    t.integer "secondary_weapon_id"
    t.integer "ranged_weapon_id"
    t.integer "gold_pieces"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["backpack_id"], name: "index_beings_on_backpack_id"
    t.index ["languages_id"], name: "index_beings_on_languages_id"
    t.index ["main_weapon_id"], name: "index_beings_on_main_weapon_id"
    t.index ["proficiencies_id"], name: "index_beings_on_proficiencies_id"
    t.index ["race_id"], name: "index_beings_on_race_id"
    t.index ["ranged_weapon_id"], name: "index_beings_on_ranged_weapon_id"
    t.index ["secondary_weapon_id"], name: "index_beings_on_secondary_weapon_id"
    t.index ["skills_id"], name: "index_beings_on_skills_id"
  end

  create_table "beings_items", id: false, force: :cascade do |t|
    t.integer "being_id", null: false
    t.integer "item_id", null: false
    t.index ["being_id", "item_id"], name: "index_beings_items_on_being_id_and_item_id"
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

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.integer "cost"
    t.float "weight"
    t.boolean "is_trinket"
    t.boolean "is_tool"
    t.boolean "is_ammunition"
    t.boolean "is_weapon"
    t.boolean "is_ranged"
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
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
