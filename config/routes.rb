Rails.application.routes.draw do
  root 'projects#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :projects
  resources :users, only: [:show]

  namespace :api do
    namespace :v1 do
      resources :projects, only: [:index, :show, :new, :create, :update, :destroy] do
        resources :equipment, :materials, :steps
      end
    end
  end

end
