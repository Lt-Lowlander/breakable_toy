class Project < ApplicationRecord
  validates :name, :description, :photo_url, :users_id, presence: true

  has_many :project_submissions
  has_many :equipment
  has_many :materials
  has_many :steps
end
