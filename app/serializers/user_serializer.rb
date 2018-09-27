class UserSerializer < ActiveModel::Serializer
  attributes :id, :role, :handle, :bio

  has_many :projects
  has_many :equipment
end
