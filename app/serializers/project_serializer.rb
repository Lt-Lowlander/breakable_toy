class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :photo_url, :budget, :topics

  has_many :equipment
  has_many :materials
  has_many :steps

end
