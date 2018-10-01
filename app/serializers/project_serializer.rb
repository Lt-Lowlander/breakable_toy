class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :description, :photo_url, :version_id, :handle, :budget, :topics

  has_many :equipment
  has_many :materials
  has_many :steps

  belongs_to :user
end
