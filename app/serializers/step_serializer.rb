class StepSerializer < ActiveModel::Serializer
  attributes :id, :sequence_number, :instruction, :step_photo
  belongs_to :project
end
