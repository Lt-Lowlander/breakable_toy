class Material < ApplicationRecord
  belongs_to :project

  validates :material_name, :project, presence: true
end
