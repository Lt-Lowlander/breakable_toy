class EquipmentSerializer < ActiveModel::Serializer
  attributes :tool_name
  belongs_to :project
end
