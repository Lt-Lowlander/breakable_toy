class Step < ApplicationRecord
  belongs_to :project

  validates :project_id, :instruction, presence: true
end
