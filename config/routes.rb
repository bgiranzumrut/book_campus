Rails.application.routes.draw do
  get "libraries/index"
  get "libraries/show"
  root "pages#home"
  get "/about", to: "pages#about"
  resources :books, only: [:index, :show]
  resources :authors, only: [:index, :show]

end
