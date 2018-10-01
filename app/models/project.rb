class Project < ApplicationRecord
  validates :name, :description, :photo_url, :version_id, :handle, :user_id, presence: true

  belongs_to :user

  has_many :equipment
  has_many :materials
  has_many :steps

end
