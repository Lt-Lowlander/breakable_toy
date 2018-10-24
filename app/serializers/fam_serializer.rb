class FamSerializer < ActiveModel::Serializer
  attributes :id, :famName

  has_many :projects
end
