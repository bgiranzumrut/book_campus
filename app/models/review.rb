class Review < ApplicationRecord
  belongs_to :book


  validates :user_name, presence: true
  validates :rating, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }
  validates :comment, length: { minimum: 5 }, allow_blank: true
end
