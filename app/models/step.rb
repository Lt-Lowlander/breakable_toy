class Step < ApplicationRecord
  belongs_to :project

  validates :project_id, :sequence_number, :instruction, presence: true
end
