# frozen_string_literal: true

Rails.application.routes.draw do
  get 'greetings/random'
  # get 'root/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  get '/greetings/random', to: 'greetings#random', as: 'random_greeting'
  root 'greetings#random'
end
