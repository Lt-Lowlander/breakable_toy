class Equipment < ApplicationRecord
  # has_many :equipment_in_projects
  # has_many :projects, through: :equipment_in_projects
  # has_many :users, through: :equipment_in_projects

  validates :user_id, :project_id, :tool_name, presence: true

  belongs_to :project
  belongs_to :user
end
