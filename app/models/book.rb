class Book < ApplicationRecord
  has_many :author_books
  has_many :authors, through: :author_books

  has_many :reviews, dependent: :destroy

  # Validations
  validates :title, presence: true, uniqueness: true
  validates :description, presence: true
  validates :published_date, presence: true
end
