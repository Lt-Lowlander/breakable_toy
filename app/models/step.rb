class Step < ApplicationRecord
  mount_uploader :step_photo, StepPhotoUploader
  validates :project_id, :instruction, presence: true

  belongs_to :project
end
