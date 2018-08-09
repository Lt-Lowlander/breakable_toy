class ProjectSteps < ApplicationRecord
  belongs_to :project

  validates :step_number, :step_instructions, presence: true
end
