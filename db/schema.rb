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

ActiveRecord::Schema.define(version: 2018_07_03_063927) do

  create_table "active_admin_comments", force: :cascade do |t|
    t.string "namespace"
    t.text "body"
    t.string "resource_type"
    t.integer "resource_id"
    t.string "author_type"
    t.integer "author_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id"
    t.index ["namespace"], name: "index_active_admin_comments_on_namespace"
    t.index ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id"
  end

  create_table "admin_users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_admin_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true
  end

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
    t.string "name"
    t.integer "cost"
    t.float "weight"
    t.boolean "is_trinket"
    t.boolean "is_tool"
    t.boolean "is_ammunition"
    t.string "type"
    t.string "class"
    t.string "range"
    t.string "damage"
    t.string "damage_type"
    t.string "properties"
    t.float "weight_lbs"
    t.boolean "silvered"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "melee_weapons", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ranged_weapons", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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
