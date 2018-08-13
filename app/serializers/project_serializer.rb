class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :users_id, :name, :description, :version_id, :photo_url, :budget, :topics, :equipment

  has_many :equipment
end
