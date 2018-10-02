class Project < ApplicationRecord
  validates :name, :description, :photo_url, :version_id, :handle, :user_id, presence: true

  belongs_to :user

  has_many :equipment_in_projects
  has_many :equipment, through: :equipment_in_projects
  has_many :materials
  has_many :steps

end
