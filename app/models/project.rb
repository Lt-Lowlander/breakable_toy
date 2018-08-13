class Project < ApplicationRecord
  validates :name, :description, :version_id, :photo_url, :user, presence: true
  has_many :project_submissions
  has_many :equipment
end
