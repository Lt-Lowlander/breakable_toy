class MaterialSerializer < ActiveModel::Serializer
  attributes :id, :material_name, :item_number
  belongs_to :project
end
