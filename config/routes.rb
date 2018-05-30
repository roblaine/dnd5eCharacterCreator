Rails.application.routes.draw do
  resources :users
  # except [:index] # don't render the index page, either fix in routes or in the controller
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
