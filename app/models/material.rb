class Material < ApplicationRecord
  belongs_to :project

  validates :material_name, :project_id, presence: true
end
