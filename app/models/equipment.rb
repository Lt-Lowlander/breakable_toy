class Equipment < ApplicationRecord
  has_many :user_equipment_lists
  has_many :users, through: :user_equipment_lists
  has_many :equipment_in_projects
  has_many :projects, through: :equipment_in_projects

  validates :tool_name, :user_id, :project_id, presence: true
end
