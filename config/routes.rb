Rails.application.routes.draw do
  # resources :dogs
  root 'dogs#index'

  get "/dogs/:id", to: "homes#index"
  devise_for :users

   namespace :api do
    namespace :v1 do 
      resources :dogs, only: [:show, :create]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
