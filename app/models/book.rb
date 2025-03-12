class Book < ApplicationRecord
  belongs_to :author
  has_many :reviews, dependent: :destroy

  # Validations
  validates :title, presence: true, uniqueness: true
  validates :description, presence: true
  validates :published_date, presence: true
  validates :genre, presence: true
end
