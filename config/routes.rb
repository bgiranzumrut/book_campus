Rails.application.routes.draw do
  get "libraries/index"
  get "libraries/show"

  root "pages#home"
  get "/about", to: "pages#about"

  resources :books, only: [:index, :show]
  resources :authors, only: [:index, :show]
  resources :libraries, only: [:index, :show]


  resources :books do
    resources :reviews, only: [:create]
  end  # <-- You were missing this end
end
