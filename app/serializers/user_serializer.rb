class UserSerializer < ActiveModel::Serializer
  attributes :id, :role, :handle, :bio

  has_many :projects
  has_many :equipment
  # has_many :user_equipment_lists
  # has_many :equipment, through: :user_equipment_lists
end
