class Project < ApplicationRecord
  has_many :project_submissions

  validates :name, :description, :version_id, :photo_url, presence: true
end
