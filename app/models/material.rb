class Material < ApplicationRecord
  belongs_to :project

  validates :item_number, :material_name, :project_id, presence: true
end
