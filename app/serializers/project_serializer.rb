class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :version_id, :photo_url, :budget, :topics, :equipment

  has_many :equipment
  has_many :materials
end
