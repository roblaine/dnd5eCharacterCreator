ActiveAdmin.register Being do
  permit_params :is_npc, :name, :age, :motivation,
  :dead, :initiative, :current_hp,:max_hp, :level, :armor_class, :strength,
  :dexterity, :constitution, :intelligence, :wisdom, :charisma, :gold_pieces
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
# permitted = [:permitted, :attributes]
# permitted << :other if params[:action] == 'create' && current_user.admin?
# permitted
# end
end
