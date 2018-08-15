class MaterialSerializer < ActiveModel::Serializer
  attributes :id, :material_name
  belongs_to :project
end
