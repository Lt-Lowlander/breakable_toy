class StepSerializer < ActiveModel::Serializer
  attributes :id, :instruction, :step_photo
  belongs_to :project
end
