class Author < ApplicationRecord
  has_many :author_books
  has_many :books, through: :author_books

  # Validations
  validates :name, presence: true, uniqueness: true
end
