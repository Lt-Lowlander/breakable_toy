class Equipment < ApplicationRecord
  belongs_to :user
  belongs_to :project

  validates :tool_name, :user_id, :project_id, presence: true
end
