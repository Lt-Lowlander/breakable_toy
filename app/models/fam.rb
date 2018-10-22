class Fam < ApplicationRecord
  validates :id, presence: true
  has_many :projects
end
