class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :description, :photo_url, :version_id, :handle, :budget, :topics, :duration, :difficulty, :parent_id, :fam_id

  belongs_to :user
  belongs_to :fam

  # has_many :equipment_in_projects
  # has_many :equipment, through: :equipment_in_projects
  has_many :equipment
  has_many :materials
  has_many :steps
end
