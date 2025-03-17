class DropBookstoresTable < ActiveRecord::Migration[7.2]
  def up
    drop_table :bookstores
  end

  def down
    create_table :bookstores do |t|
      t.string :name
      t.string :address
      t.float :latitude
      t.float :longitude
      t.timestamps
    end
  end
end
