Rails.application.routes.draw do
  root 'projects#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :projects
  resources :users, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show] do
        resources :projects, only: [:index, :show]
        resources :equipment_in_projects, only: [:index, :show]
        resources :equipment, only: [:index]
      end
      resources :projects do
        resources :equipment
        resources :materials
        resources :steps
      end
    end
  end

end
