class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :version_id, :photo_url, :budget, :topics
end
