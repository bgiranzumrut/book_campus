class AddDetailsToLibraries < ActiveRecord::Migration[7.2]
  def change
    add_column :libraries, :wifi, :boolean
    add_column :libraries, :accessibility, :boolean
    add_column :libraries, :room_rentals, :boolean
    add_column :libraries, :parking_lot, :boolean
    add_column :libraries, :parking_stalls, :integer
    add_column :libraries, :website, :string
  end
end
