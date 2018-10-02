class EquipmentInProjectSerializer < ActiveModel::Serializer
  attributes :id, :equipment_id, :project_id, :user_id

  belongs_to :equipment
  belongs_to :project
  belongs_to :user
end
