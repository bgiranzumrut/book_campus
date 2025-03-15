class AddCoordinatesToLibraries < ActiveRecord::Migration[7.2]
  def change
    add_column :libraries, :latitude, :float
    add_column :libraries, :longitude, :float
  end
end
