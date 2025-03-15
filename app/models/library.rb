class Library < ApplicationRecord
  validates :name, :address, presence: true

  # Add latitude and longitude for mapping
  geocoded_by :address
  after_validation :geocode, if: ->(obj) { obj.address.present? && obj.address_changed? }
end
