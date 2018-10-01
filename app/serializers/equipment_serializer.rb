class EquipmentSerializer < ActiveModel::Serializer
  attributes :id, :tool_name
  belongs_to :project
  belongs_to :user
end
