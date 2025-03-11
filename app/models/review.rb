class Review < ApplicationRecord
  belongs_to :book
  validates :user_name, presence: true
  validates :rating, inclusion: { in: 1..5 }
end
