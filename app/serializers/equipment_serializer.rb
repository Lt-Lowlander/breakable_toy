class EquipmentSerializer < ActiveModel::Serializer
  attributes :id, :tool_name
  belongs_to :project
end
