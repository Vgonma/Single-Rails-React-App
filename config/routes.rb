# frozen_string_literal: true

Rails.application.routes.draw do
  root 'root#index'

  namespace :api do
    resources :greetings, only: [:index]
    get '/greetings/random', to: 'greetings#random'
  end

  get '*path', to: 'root#index', constraints: ->(request) { !request.xhr? && request.format.html? }
end
