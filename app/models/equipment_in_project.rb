class EquipmentInProject < ApplicationRecord
  validates :id, presence: true
  belongs_to :project
  belongs_to :user
  belongs_to :equipment
end
