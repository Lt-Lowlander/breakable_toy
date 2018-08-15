class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :photo_url, :budget, :topics, :equipment

  has_many :equipment
  has_many :materials

end
