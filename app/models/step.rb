class Step < ApplicationRecord
  validates :project_id, :instruction, presence: true

  belongs_to :project
end
