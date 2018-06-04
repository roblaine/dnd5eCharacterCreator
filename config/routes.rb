Rails.application.routes.draw do
  resources :user, only: [:new, :show, :create, :destroy]

  get "/users", to: "user#show"
  # except [:index] # don't render the index page, either fix in routes or in the controller
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
