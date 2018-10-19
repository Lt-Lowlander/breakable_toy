class EquipmentInProjectSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :project
  belongs_to :user
  belongs_to :equipment
end
