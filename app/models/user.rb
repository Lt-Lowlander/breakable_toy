class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :role, presence: true
  validates :handle, presence: true
  validates :bio, presence: true

  has_many :project_submissions
  has_many :projects, through: :project_submissions
  has_many :equipment
  has_many :projects, through: :equip
end
