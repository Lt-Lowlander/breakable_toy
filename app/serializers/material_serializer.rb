class MaterialSerializer < ActiveModel::Serializer
  attributes :material_name
  belongs_to :project
end
