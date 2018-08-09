class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :version_id, :photo_url, :budget, :topics
  has_many :equipment
  has_many :materials
  has_many :project_steps
end
