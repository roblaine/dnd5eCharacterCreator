Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  devise_for :admin_users, ActiveAdmin::Devise.config

  # route all of our beings weapons and items paths behind host/api/
  # eg localhost:3001/api/weapons/
  scope '/api' do
    resources :beings
    resources :weapons
    resources :items
  end

  # except [:index] # don't render the index page, either fix in routes or in the controller
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
