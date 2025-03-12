Rails.application.routes.draw do
  root "pages#home"
  get "/about", to: "pages#about"
  resources :books, only: [:index, :show]
  resources :authors, only: [:index, :show]

end
