Rails.application.routes.draw do
  root 'projects#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :projects, only: [:index, :show, :new, :create, :edit]
  resources :equipment, only: [:index, :show, :new, :create, :edit]

  namespace :api do
    namespace :v1 do
      resources :projects, only: [:index, :show, :new, :create, :update, :destroy] do
        resources :equipment, only: [:index, :show, :create]
        resources :materials, only: [:index, :show, :create]
      end
    end
  end

end
