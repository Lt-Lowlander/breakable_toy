class EquipmentSerializer < ActiveModel::Serializer
  attributes :id, :tool_name

  has_many :equipment_in_project
end
