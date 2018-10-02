class EquipmentInProject < ApplicationRecord
  belongs_to :project
  belongs_to :user
  belongs_to :equipment
end
