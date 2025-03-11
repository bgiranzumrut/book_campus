class Author < ApplicationRecord
  has_many :books, dependent: :destroy

  # Validations
  validates :name, presence: true, uniqueness: true
  validates :bio, length: { minimum: 10 }, allow_blank: true
end
