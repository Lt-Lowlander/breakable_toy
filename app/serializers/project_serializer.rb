class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :description, :photo_url, :version_id, :handle, :budget, :topics

  belongs_to :user

  has_many :equipment_in_projects
  has_many :equipment, through: :equipment_in_projects
  has_many :materials
  has_many :steps
end
