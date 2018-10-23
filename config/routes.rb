Rails.application.routes.draw do
  root 'projects#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :projects
  resources :users, only: [:index, :show, :update]
  resources :white_rabbit, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :equipment
      resources :equipment_in_projects, only: [:index, :show]

      resources :fams do
        resources :projects, only: [:index]
      end
      resources :projects do
        resources :equipment
        resources :materials
        resources :steps
      end
      resources :users, only: [:index, :show, :update] do
        resources :projects, only: [:index, :show]
        resources :equipment_in_projects, only: [:index, :show]
        resources :equipment, only: [:index]
      end
    end
  end

end
