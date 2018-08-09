class Equipment < ApplicationRecord
  belongs_to :user
  belongs_to :project

  validates :tool_name, :user, :project, presence: true
end
