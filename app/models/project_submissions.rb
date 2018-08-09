class ProjectSubmissions < ApplicationRecord
  belongs_to :user
  belongs_to :project

  validates :project_title, presence: true
end
