class Project < ApplicationRecord
  mount_uploader :photo_url, ProjectPhotoUploader

  validates :name, :description, :photo_url, :version_id, :handle, :user_id, :fam_id, presence: true

  belongs_to :user
  belongs_to :fam

  has_many :equipment_in_projects
  has_many :equipment, through: :equipment_in_projects
  has_many :materials
  has_many :steps
end
