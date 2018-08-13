class Project < ApplicationRecord
  validates :name, :description, :version_id, :photo_url, :users_id, presence: true
  
  has_many :project_submissions
  has_many :equipment
  has_many :materials
end
