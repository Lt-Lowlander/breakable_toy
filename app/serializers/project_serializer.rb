class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :user, :name, :description, :version_id, :photo_url, :budget, :topics, :equipment

  has_many :equipment
end
