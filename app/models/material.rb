class Material < ApplicationRecord
  validates :material_name, :project_id, presence: true

  belongs_to :project
end
