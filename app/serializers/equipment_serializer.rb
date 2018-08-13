class EquipmentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :project_id, :tool_name
  belongs_to :project
end
