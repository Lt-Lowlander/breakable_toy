class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :role, presence: true
  validates :handle, presence: true
  validates :bio, presence: true

  has_many :projects
  has_many :user_equipment_lists
  has_many :equipment, through: :user_equipment_lists

  def admin?
    role == "admin"
  end

  class << self
    def current_user=(user)
      Thread.current[:current_user] = user
    end

    def current_user
      Thread.current[:current_user]
    end
  end

end
