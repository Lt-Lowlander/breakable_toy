class UserSerializer < ActiveModel::Serializer
  attributes :id, :role, :handle, :bio, :profile_photo

  has_many :projects
  has_many :equipment, through: :equipment_in_projects
end
