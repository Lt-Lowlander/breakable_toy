class EquipmentInProjects < ApplicationRecord
  belongs_to :project
  belongs_to :equipment
  belongs_to :user
end
