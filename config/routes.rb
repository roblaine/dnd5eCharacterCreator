Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :user, only: [:new, :show, :create, :destroy]

  get "/items", to: "items#show"

  get "/users", to: "user#show"
  # except [:index] # don't render the index page, either fix in routes or in the controller
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
