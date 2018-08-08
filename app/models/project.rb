class Project < ApplicationRecord
  has_many :project_submissions

  validates :name, :description, :version, :photo, presence: true
end
