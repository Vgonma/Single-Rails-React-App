Rails.application.routes.draw do
  resources :greetings
  root 'root#index'

  namespace :api do
    resources :greetings
  end
end
